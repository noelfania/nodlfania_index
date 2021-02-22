##Unix / Linux Shell
help 

## Basics
ls *.doc
pwd
ps
whoami
hostname
echo `date +%m/%d`
echo line 1 > users
echo line 2 >> users
echo $?
$ wc -l < file.txt
$ wc -w file.txt
cd
cd ~
cd ~username
cd -
cat
tail
file Identifies the file type (binary, text, etc)
find Finds a file/directory
head Shows the beginning of a file
more Browses from the beginning to the end
less Browses from the end or the beginning
touch 
mv file1 file2 Moves or renames a file/directory
cp file1 file2
rm Removes a file
mkdir Creates directory
rmdir Removes directory
#
whereis Shows the location of a file
which Shows the location of a file if it is in your PATH
ping hostname or ip-address

## Filters
| grep
-v Prints all lines that do not match pattern.
-n Prints the matched line and its line number.
-l Prints only the names of files with matching lines (letter "l")
-c Prints only the count of matching lines.
-i Matches either upper or lowercase.
| sort
-n Sorts numerically (example: 10 will sort after 2), ignores blanks and tabs.
-r Reverses the order of sort.	
-f Sorts upper and lowercase together.	
+x Ignores first x fields when sorting.
| more
| less

## FTP
ftp hostname or ip-address
put  Uploads 
get  Downloads
mput list Uploads
mget list Downloads
prompt off
prompt on
dir
cd
lcd cd local machine.
quit

## Variables is UPPERCASE
NAME="A"
echo $NAME
readonly NAME
unset NAME

## Special Variables
echo "File Name: $0"
echo "First Parameter : $1"
echo "Second Parameter : $2"
echo "Quoted Values: $@"
echo "Quoted Values: $*"
echo "Number of Parameters : $##"

## Arrays
NAME[0]="Zara"
NAME[1]="Qadir"
echo "First Index: ${NAME[0]}"
echo "Second Index: ${NAME[1]}"
echo "First Method: ${NAME[*]}"
echo "Second Method: ${NAME[@]}"

## Operators
`expr $a + $b` will give 30
`expr $a - $b` will give -10
`expr $a \* $b` will give 200
`expr $b / $a` will give 2
`expr $b % $a` will give 0
a = $b would assign value of b into a
[ $a == $b ] would return false.
[ $a != $b ] would return true.
[ $a -eq $b ] is not true.
[ $a -ne $b ] is true.
[ $a -gt $b ] is not true.
[ $a -lt $b ] is true.
[ $a -ge $b ] is not true.
[ $a -le $b ] is true.
[ $a <= $b ]
[ ! false ] is true.
[ $a -lt 20 -o $b -gt 100 ] logical OR
[ $a -lt 20 -a $b -gt 100 ] logical AND
[ $a = $b ] is not true.
[ $a != $b ] is true.
[ -z $a ] Checks zero
[ -n $a ] Checks non-zero
[ -w $file ] Checks if file is writable
[ -x $file ] Checks if file is executable
[ -s $file ] Checks if file has size greater than 0
[ -e $file ] Checks if if file exists
[ -d $file ] Checks if file is a directory
[ -f $file ] Checks if file is an ordinary file as opposed to a directory or special file

## If/elif/else Statement
a=10
b=20
if [ $a == $b ]
then
   echo "a == b"
elif [ $a -gt $b ]
then
   echo "a > b"
elif [ $a -lt $b ]
then
   echo "a < b"
else
   echo "None"
fi

## select/case Loop
select DRINK in A B C D E F G
do
   case $DRINK in
      A|B|C|D) 
         echo "Go to canteen"
       ;;
      E|F)
         echo "Available at home"
      ;;
      G) 
         break 
      ;;
      *) echo "ERROR: Invalid selection" 
      ;;
   esac
done

## until Loop Control
a=10
until [ $a -gt 20 ]
do
   echo $a
   a=`expr $a + 1`
done

## while/break Statement
a=0
while [ $a -lt 10 ]
do
   echo $a
   if [ $a -eq 5 ]
   then
	  break
   fi
   a=`expr $a + 1`
done

## for Loop
for allParameter in $*
do
   echo $allParameter
done

for i in {1..3}
do
	echo $i
done

## for/break Statement
for var1 in 1 2 3
do
   for var2 in 0 5
   do
      if [ $var1 -eq 2 -a $var2 -eq 0 ]
      then
         break 2
      else
         echo "$var1 $var2"
      fi
   done
done

## for/continue statement
NUMS="1 2 3 4 5 6 7"
for NUM in $NUMS
do
   Q=`expr $NUM % 2`
   if [ $Q -eq 0 ]
   then
      echo "Even number: $NUM"
      continue
   fi
   echo "Odd number: $NUM"
done



## Functions with return
# Define your function here
Func () {
   echo "Func: $1 $2"
   return 10
}
# Invoke your function
Func A B
# Capture value returnd by last command
ret=$?
echo "Return is $ret"

## Functions Chain
# Calling one function from another
func1 () {
   echo "First function $1 $2"
   func2
}
func2 () {
   echo "Second function"
}
# Calling function one.
func1 1 2 
unset -f func1
func1