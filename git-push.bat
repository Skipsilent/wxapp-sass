@echo off 
title 提交修改信息...
rem 关闭自动输出
git add .
git status 
rem 提示输入更新信息
set input=
echo.
set /p input=请输入本次提交日志:
echo.
rem 输出得到的输入信息
git commit -m "%input%"
echo.
git push
pause