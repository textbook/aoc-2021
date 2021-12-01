#! /usr/bin/env bash

set -euo pipefail

if [ $# -ne 1 ]; then
  echo "usage: ./day.sh <day number>"
  echo "This will run the script for the specified day"
  exit 1
fi

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

DAY="day$(printf '%02d' $1)"

echo "running $DAY"

node "$HERE/../lib/$DAY/main.js" "$HERE/../src/$DAY/input.txt"
