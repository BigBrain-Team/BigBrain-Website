try:
    import os
    import time
    import shutil
    from progress.bar import ShadyBar
except ModuleNotFoundError:
    print("🦄 Use python3 please.")
    print("📦 Python deps needed: shutil, progress")
    print("🍳 CLI (npm) needed: cssnano, terser")
    exit(0)

# Clear terminal (cross-platform)
os.system("cls" if (os.name == "nt") else "clear")

print("🦄 Use python3 please.")
print("📦 Python deps needed: shutil, progress")
print("🍳 CLI (npm) needed: cssnano, terser")
if input("\nPress [Enter] to continue. Enter any key to quit: ") != "":
    exit(0)

# Minify Configs:
configs = {
    "js": "--compress --mangle",
}

# Copy all directories
print("\n🌳 | Grabbing directories: ", end="", flush=True)
try:
    shutil.rmtree("dist-tmp/")
except (FileNotFoundError, FileExistsError):
    pass
shutil.copytree("src/", "dist-tmp/", ignore=shutil.ignore_patterns("*.*"))
print("Done.")

f_count = 0
for subdir, dirs, files in os.walk("src"):
    for file in files:
        f_count += 1

b = ShadyBar("🎁 | Minifying", max=f_count)
for subdir, dirs, files in os.walk("src"):
    for file in files:
        # Get src and final directories of file
        src_dir = subdir + os.sep + file
        tmp_dir = src_dir.replace("src", "dist-tmp", 1)

        if file.endswith(".js"):
            os.system(f'terser {configs["js"]} -o {tmp_dir} -- {src_dir}')
        elif file.endswith(".css"):
            os.system(f'cssnano {src_dir} {tmp_dir}')
        else:
            shutil.copy(src_dir, tmp_dir)
            time.sleep(0.01)

        # Its satisfying (ph. trick)
        b.next()
b.finish()

print("\n[ Minifying successful, cleaning up ]\n")

print("📑 | Overwritting [dist/]")
shutil.rmtree("dist/")
shutil.copytree("dist-tmp/", "dist/")

print("🚫 | Deleting [dist-tmp/]")
shutil.rmtree("dist-tmp/")
print("🏁 | Finished!")
