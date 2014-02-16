@ECHO OFF
SET BINDIR=%~dp0
CD /D "%BINDIR%"
"%ProgramFiles(x86)%\Java\jre7\bin\java.exe" -Xincgc -Xmx1G -jar craftbukkit.jar
PAUSE