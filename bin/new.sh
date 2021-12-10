#! /usr/bin/env bash

set -euo pipefail

if [ $# -ne 1 ]; then
    echo 'usage: ./bin/new.sh <day number>'
    echo 'This will create a new directory for the specified day'
    exit 1
fi

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

DIR="$HERE/../src/day$(printf '%02d' $1)"

if [ -d "$DIR" ]; then
    echo "$DIR already exists"
    exit 1
fi

mkdir -p $DIR
for FILE in 'domain.ts' 'domain.test.ts' 'index.ts' 'index.test.ts' 'parse.ts' 'parse.test.ts'; do
    touch "$DIR/$FILE"
done
git add "$DIR" -N
