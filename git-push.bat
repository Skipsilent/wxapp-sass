@echo off 
title �ύ�޸���Ϣ...
rem �ر��Զ����
git add .
git status 
rem ��ʾ���������Ϣ
set input=
echo.
set /p input=�����뱾���ύ��־:
echo.
rem ����õ���������Ϣ
git commit -m "%input%"
echo.
git push
pause