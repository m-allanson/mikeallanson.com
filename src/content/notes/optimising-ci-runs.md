---
title: Optimising CI Runs
date: 2021-08-03
---

I spent some time optimising the CI runs for a recent project.

In this case there were two dimensions to optimise against:

- total CI minutes used (each month)
- duration of each CI run

Usually improvements to one dimension improve the other. But sometimes they'd conflict.

## Unparallelise jobs

In this case, slightly increasing each run duration led to a big reduction in total CI minutes used.

The setup was a number of jobs running in parallel:

```
- shortJobA
- shortJobB
- shortJobC
- longJob
```

`longJob` would always run, even if all of the `shortJob`s failed. Changing the run ordering to:

```
- shortJobA --|
- shortJobB --|--> longJob
- shortJobC --|
```

Meant that `longJob` would only run after all the `shortJob`s passed. This made individual CI runs take slightly longer, but massively reduced the overall number of CI minutes used.

## Other optimisations

Other optimisations fell into the following few categories:

- Remove unneccessary work
- Optimise slow work
- Cache results of expensive work

Remove, reduce or re-use. I guess that's a general lesson for any code.
