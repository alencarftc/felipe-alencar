#!/bin/bash
# declare variables
old_dir=$PWD
target_dir="/tmp/${PWD##*/}"
commit_message=$1

if [ -z "$commit_message" ]; then
  echo "Error: Missing commit message"
  exit
fi

function prepare_env {
  mkdir -p "$target_dir"
  sudo cp -R ./* .git "$target_dir"
  sudo chown -R "$USER" "$target_dir"
  cd "$target_dir" || exit
}

function prepare_update {
  sudo rm -rf ./*
  git checkout main
  sudo rm -rf ./*
  cp -R "$old_dir/dist" "$old_dir/CNAME" "$target_dir"
  mv dist/* .
  rm -rf dist
}

function update {
  git add .
  git commit -m "$commit_message"
  git push origin main
}

echo "Building..."
yarn build
echo "Preparing environment..."
prepare_env
echo "Preparing update..."
prepare_update
echo "Updating..."
update

echo "Deploy executed successfully!"
cd "$old_dir" || exit
