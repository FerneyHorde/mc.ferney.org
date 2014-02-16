@ECHO OFF
SET BINDIR=%~dp0
CD /D "%BINDIR%"
java -Xincgc -Xmx1G -jar craftbukkit.jar
PAUSE