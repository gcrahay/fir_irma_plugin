#!/bin/bash

# Rewrites Angular.js template tags

for FILE in $*
do
if [ -e $FILE ]
then
sed -i "s/{{/{\$/g" $FILE
sed -i "s/}}/\$}/g" $FILE
fi
done
exit 0

