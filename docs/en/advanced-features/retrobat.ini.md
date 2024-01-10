# retrobat.ini

The `retrobat.ini` file located in the root Retrobat folder can be modified to enable or disable some Retrobat features.

> [!IMPORTANT]
> These features can also be modified in the BATGUI tool, refer to the [BATGUI ](batgui.md)section of the wiki.

This is the list of options that can be modified in the "retrobat.ini" file:

<table><thead><tr><th width="199">Setting</th><th width="226">Values</th><th>Description</th></tr></thead><tbody><tr><td>LanguageDetection</td><td>0 (disabled) / 1 (enabled)</td><td>Automatically detect Operating System language</td></tr><tr><td>ResetConfigMode</td><td>0 (disabled) / 1 (enabled)</td><td>Reset the default config files options of the emulators at startup.</td></tr><tr><td>Autostart</td><td>0 (disabled) / 1 (enabled)</td><td>Autostart Retrobat at Windows startup</td></tr><tr><td><a href="../controllers/supported-controllers/lightguns/wiimotegun.md">WiimoteGun</a></td><td>0 (disabled) / 1 (enabled)</td><td>Run WiimoteGun at RetroBat's startup.</td></tr><tr><td>EnableIntro</td><td>0 (disabled) / 1 (enabled)</td><td>Enable intro video.</td></tr><tr><td>FileName</td><td>name of the video file between " "</td><td>Define the video file to play at startup.</td></tr><tr><td>FilePath</td><td>Path between " " <br>Default = "default"</td><td>Sse a custom directory for video files.</td></tr><tr><td>RandomVideo</td><td>0 (disabled) / 1 (enabled)</td><td>Play a random video from the path selected.</td></tr><tr><td>VideoDuration</td><td>duration in miliseconds.<br>Default = 6500</td><td>Duration of the intro video</td></tr><tr><td>Fullscreen</td><td>0 (disabled) / 1 (enabled)</td><td>Start Retrobat in fullscreen or windowed mode</td></tr><tr><td>ForceFullscreenRes</td><td>0 (disabled) / 1 (enabled)</td><td>Force the fullscreen resolution with the parameters set at WindowXSize and WindowYSize.</td></tr><tr><td>GameListOnly</td><td>0 (disabled) / 1 (enabled)</td><td>Retrobat will parse only the gamelist.xml files in roms directories to display available games.</td></tr><tr><td>InterfaceMode</td><td>0 = normal<br><a href="kiosk-and-kid-mode.md">1 = kiosk mode<br>2 = kid mode</a></td><td></td></tr><tr><td>MonitorIndex</td><td>Default = 0</td><td>Set to which monitor index the frontend will be displayed.</td></tr><tr><td>NoExitMenu</td><td>0 (disabled) / 1 (enabled)</td><td>Set if the option to quit the frontend is displayed or not when the full menu is enabled.</td></tr><tr><td>WindowXSize<br>WindowYSize</td><td></td><td>Set the windows width and height of the frontend.</td></tr></tbody></table>