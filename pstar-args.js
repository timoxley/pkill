/**
 *  -F pidfile  Restrict matches to a process whose PID is stored in the pidfile file.
 *
 *   -G gid      Restrict matches to processes with a real group ID in the comma-separated list gid.
 *
 *   -I          Request confirmation before attempting to signal each process.
 *
 *   -L          The pidfile file given for the -F option must be locked with the flock(2) syscall or created with pidfile(3).
 *
 *   -P ppid     Restrict matches to processes with a parent process ID in the comma-separated list ppid.
 *
 *   -U uid      Restrict matches to processes with a real user ID in the comma-separated list uid.
 *
 *   -d delim    Specify a delimiter to be printed between each process ID.  The default is a newline.  This option can only be used with the pgrep command.
 *
 *   -a          Include process ancestors in the match list.  By default, the current pgrep or pkill process and all of its ancestors are excluded (unless -v is used).
 *
 *   -f          Match against full argument lists.  The default is to match against process names.
 *
 *   -g pgrp     Restrict matches to processes with a process group ID in the comma-separated list pgrp.  The value zero is taken to mean the process group ID of the running pgrep or pkill command.
 *
 *   -i          Ignore case distinctions in both the process table and the supplied pattern.
 *
 *   -l          Long output.  For pgrep, print the process name in addition to the process ID for each matching process.  If used in conjunction with -f, print the process ID and the full argument list for each
 *               matching process.  For pkill, display the kill command used for each process killed.
 *
 *   -n          Select only the newest (most recently started) of the matching processes.
 *
 *   -o          Select only the oldest (least recently started) of the matching processes.
 *
 *   -q          Do not write anything to standard output.
 *
 *   -t tty      Restrict matches to processes associated with a terminal in the comma-separated list tty.  Terminal names may be of the form ttyxx or the shortened form xx.  A single dash (`-') matches processes
 *               not associated with a terminal.
 *
 *   -u euid     Restrict matches to processes with an effective user ID in the comma-separated list euid.
 *
 *   -v          Reverse the sense of the matching; display processes that do not match the given criteria.
 *
 *   -x          Require an exact match of the process name, or argument list if -f is given.  The default is to match any substring.
 *
 *   -signal     A non-negative decimal number or symbolic signal name specifying the signal to be sent instead of the default TERM.  This option is valid only when given as the first argument to pkill.
 *
 *   If any pattern operands are specified, they are used as regular expressions to match the command name or full argument list of each process.
 */

module.exports = {
  pattern: 'Used as regular expressions to match the command name or full argument list of each process.',
  patterns: 'If any pattern operands are specified, they are used as regular expressions to match the command name or full argument list of each process.',
  pidfile: 'Restrict matches to a process whose PID is stored in the pidfile file.',
  gid: 'Restrict matches to processes with a real group ID in the comma-separated list gid.',
  lock: 'The pidfile file given for the pidfile option must be locked with the flock(2) syscall or created with pidfile(3).',
  ppid: 'Restrict matches to processes with a parent process ID in the comma-separated list ppid.',
  uid: 'Restrict matches to processes with a real user ID in the comma-separated list uid.',
  delim: 'Specify a delimiter to be printed between each process ID.  The default is a newline.  This option can only be used with the pgrep command.',
  ancestors: 'Include process ancestors in the match list.  By default, the current pgrep or pkill process and all of its ancestors are excluded (unless -v is used).',
  full: 'Match against full argument lists.  The default is to match against process names.',
  pgrp: ['Restrict matches to processes with a process group ID in the comma-separated list pgrp.',
         'The value zero is taken to mean the process group ID of the running pgrep or pkill command.'].join(' '),
  ignore: 'Ignore case distinctions in both the process table and the supplied pattern.',
  long: ['Long output. For pgrep, print the process name in addition to the process ID for each matching process.',
         'If used in conjunction with full, print the process ID and the full argument list for each',
         'matching process.  For pkill, display the kill command used for each process killed.'].join(' '),
  newest: 'Select only the newest (most recently started) of the matching processes.',
  oldest: 'Select only the oldest (least recently started) of the matching processes.',
  quiet: 'Do not write anything to standard output.',
  tty: ['Restrict matches to processes associated with a terminal in the comma-separated list tty.',
        'Terminal names may be of the form ttyxx or the shortened form xx.  A single dash (`-\')',
        'matches processes not associated with a terminal.'].join(' '),
  euid: 'Restrict matches to processes with an effective user ID in the comma-separated list euid.',
  reverse: 'Reverse the sense of the matching; display processes that do not match the given criteria.',
  exact: 'Require an exact match of the process name, or argument list if -f is given.  The default is to match any substring.',
  signal: ['A non-negative decimal number or symbolic signal name specifying the signal to be sent instead of the default TERM.',
           'This option is valid only when given as the first argument to pkill.'].join(' ')
}
