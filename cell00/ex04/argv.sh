# /bin/bash

if [ $# == 0 ]
then
    echo "no arguments"
elif [ $# == 1 ]
then
    echo "$1"
elif [ $# == 2 ]
then
    echo "$1"
    echo "$2"
elif [ $# == 3 ]
then
    echo "$1"
    echo "$2"
    echo "$3"
else
    echo "arguments more than 3"
fi