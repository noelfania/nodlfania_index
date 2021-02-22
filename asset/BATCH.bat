:: Batch Script

%appdata%
%userprofile%
%ProgramFiles%

:: Basic
%~dp0
help
/?
@echo off
@pause
cls
assoc
path
cd
dir
tree
start
call
cmd /k
exit /b
control
control system
REM
::
type
copy
xcopy
dir C:\ | find "txt" > AllText.txt
rename *.txt *.bak  
ren C:\Example Example1
del/erase test.bat
move new.txt, test.txt c:\example
mkdir \a\b\c
rmdir/rd
taskkill /f /im notepad.exe
tasklist
ipconfig
systeminfo
msconfig
msinfo32
hostname
ping
ftp
timeout
findstr Gateway ip.txt
| findstr -i
| find
| more
| less

:: Globla/Local Variables
set obj[0].Name=Joe 
set obj[0].ID=1 

set /p id="enter ID:"

setlocal
set /a var=13145
echo %var%
endlocal

:: Strings
set str=Helloworld
echo %str:~0,4% 

set str=This message needs changed. 
echo %str:needs=has%  

:: Operators
equ ==
neq !=
lss <
leq =<
gtr >
geq >=
ipconfig>C:\details.txt
systeminfo>>C:\details.txt
sort < Example.txt
echo y | del *.txt

:: If/else Statement
if %var%==1 (
	echo "The value is 1"
) else (
	echo "Unknown value"
) 

:: If/defined Statement
set str1=1
if defined str1 (
	echo "Variable str1 is defined"
)

:: If/exist Statement
if exist C:\set2.txt (
	echo "File exists"
)	

:: goto Statement
set /A i = 1 
:LOOP 
if %i%==5 goto END 
echo The value of i is %i% 
set /a i=%i%+1 
Ggoto LOOP 
:END

:: for Statement (list)
for %%i in (1 2 3 4 5) do (
	echo %%i
)

:: for Statement (start, step, end)
setlocal enabledelayedexpansion 
set topic[0]=comments 
set topic[1]=variables 
set topic[2]=Arrays 
set topic[3]=Decision making 
for /l %%i in (0, 1, 3) do ( 
   echo !topic[%%i]! 
)

:: for Statement
for /f "tokens=1-4 delims=-" %%a in ("GET-WHAT-YOU-WANT") do (
	echo %%a %%b %%c %%d 
)

:: call batFile with parameter
test.bat 5 10 15
echo The first parameter is %1
echo The second parameter is %2
echo The third parameter is %3

:: Functions Calling a Function
setlocal
call :Display 
exit /b
:Display 
set /a i=2 
echo The value of index is %i% 
exit /b 0

:: Functions with Parameters
setlocal
call :Display 5, 10
exit /b
:Display
echo The value of parameter 1 is %~1
echo The value of parameter 2 is %~2
exit /b 0

:: Functions with Return Values
setlocal
call :SetValue value1,value2
echo %value1%
echo %value2%
exit /b
:SetValue
set "%~1 = 5"
set "%~2 = 10"
exit /b 0



















