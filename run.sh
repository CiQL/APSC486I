#!/bin/bash
# https://unix.stackexchange.com/a/414770
psrecord $(pgrep proc-name1) --interval 1 --duration 60 --plot plot1.png &
P1=$!
psrecord $(pgrep proc-name2) --interval 1 --duration 60 --plot plot2.png &
P2=$!
wait $P1 $P2
echo 'Done'
