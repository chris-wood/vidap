# ViDAP

## Overview

Each phase of the study is described below.

- Background. In this phase, users are given an overview of DAP and privacy-preserving measurement. The contents of this background information may vary based on the study.
- Scenario. In this phase, users are given a prompt that they will use to configure DAP. The details of the scenario may vary based on the study, e.g., some scenarios may use specific details about data collection whereas others may avoid specifics. 
- ViDAP. In this phase, users will configure DAP using the visual tool. The various knobs and visualizations shown to the user may vary based on the study, e.g., perhaps some users are only allowed to control one parameter at a time whereas others are allowed maximum freedom in configuring DAP.
- Survey. In this phase, users complete a survey asking them questions about their background and experience using the tool.

At the end of the interaction, for a given data set, we can measure how well the user configured DAP against certain privacy goals. 

## Context

DAP is a system for privacy-preserving measurement. At a high level, DAP consists of users producing measurements, which are sensitive data over which an aggregate function is computed for a collector. With DAP, the collector learns the aggregate data without learning any of the individual inputs to the aggregate. This is privacy-preserving in the sense that individual inputs may be sensitive, but the aggregate output may not be.

DAP collectors can configure a measurement task using a couple of high-level parameters:

- Batch size: the number of inputs over which the aggregate will be computed. Higher batch sizes generally yield better privacy, since any one user’s contribution matters less, but come at the expense of more cost.
- Noise budget: the amount of noise or randomness introduced into the output to hide any one user’s contribution. More noise generally yields better privacy but comes at the expense of utility degradation. 

There are generally three ways by which we can measure the impact of these parameters:

1. Privacy: TODO
2. Utility: TODO
3. Cost: TODO

## Scenarios

- Scenario A. Imagine you are in the census bureau and you want to determine the average salary of people in a given region. Configure DAP to compute this average in a privacy-preserving way.
- Scenario B. Imagine you are in the census bureau and you want to determine the average salary of people in a given region. Configure DAP to compute this average such that you cannot learn any one individual’s salary contribution.
- Scenario C: Imagine you are given a list of numbers and you want to determine the average. Configure DAP to do so in a privacy-preserving way.
- Scenario D: Imagine you are given a list of numbers and you want to determine the average. Configure DAP to do so in a privacy-preserving way.

## Questions

- What sort of background do you have in security and privacy?
- Do you write software for a profession or hobby?
- Do you deal with or manage data in your professional life?
- ...?