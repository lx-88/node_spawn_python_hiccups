# Node spawning Python and stdout

## Motivation / problem statement
Node spawns a python model. That model outputs to stdout/stderr in real time and
you want to monitor that output. Node will pipe that output in real
time but a python model only outputs stdout/stderr once the model is done. This causes
headaches.

The solution is to run `python -u <your script>` to put python in unbuffered
mode.

This repository demonstrates the differences between a node model, python model run with
the normal `python` command, and the same python model run with `python -u`. The same hiccups
apply to a script that has been frozen with pyinstaller.

Comments, pull requests, whatever welcome.

## Dependencies
Just node and python. Most versions should work. Tested with Python 2.7 and Node 6.2.2

## Files
- `coordinator-node.js` fires off the node-based model.
- `coordinator-py-buffered.js` fires off the python-based model in normal python mode
- `coordinator-py-unbuffered.js` fires off the python-based model in normal python mode
- `model.js` and `model.py` represent a model that outputs a status message to stdout every second
for five seconds and then terminates. We should be able to observe the stdout messages from 
`coordinator.js` in real time while the model is running, not just on completion.
