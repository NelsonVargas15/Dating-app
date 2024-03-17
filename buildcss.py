import os
import subprocess

# Folder path, where we have the .less files
less_dir = "src/assets/less"

# File name that we're going to create
index_file = os.path.join(less_dir, "index.less")

# Get the .less files within the folder and subfolders
print("Getting every less file")
less_files = []
for root, _, files in os.walk(less_dir):
    for file in files:
        if file.endswith(".less") and file != "index.less":
            less_files.append(os.path.join(root, file))

# Create the index.less file and import the .less files
print("Importing on index.less")
with open(index_file, "w") as f:
    for less_file in less_files:
        less_file = os.path.normpath(less_file)  # Normalize the path separators
        f.write(f'@import "{less_file}";\n')

# Deleting old .css file
print("Deleting older css file")
css_file = os.path.abspath("./src/assets/css/app.css")
if os.path.exists(css_file):
    os.remove(css_file)

# Compile
print("Compiling..")
css_file = os.path.abspath("./src/assets/css/app.css")
lessc_command = f"lessc {index_file} {css_file}"
subprocess.run(lessc_command, shell=True, check=True)
