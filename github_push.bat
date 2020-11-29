@echo off
SET count=1
FOR /d %%G IN (*) DO (call :subroutine "%%G")
GOTO :eof

:subroutine
 echo %1%
 echo %count%
 set /a count+=1
 GOTO :eof