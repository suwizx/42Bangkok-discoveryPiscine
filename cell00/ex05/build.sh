# /bin/bash
if [ $# == 0 ]
then
    echo "no arguments"

else

for i in $@
do
    mkdir "ex$i"
done

fi