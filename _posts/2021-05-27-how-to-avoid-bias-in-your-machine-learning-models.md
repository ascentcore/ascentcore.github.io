---
layout: post
img: assets/images/articles/how-to-avoid-bias-machine-learning.jpg
title: "How to avoid bias in your Machine Learning models"
description: "Machine learning is more than just data. It's about understanding the biases that your models are picking up on and how they can be used to reinforce or counteract them, in order to get accurate and unbiased results. In this article, we'll examine how you can identify them before it's too late and you'll some tips for avoiding paradigm shifts that could create biased data sets."
---

# How to avoid bias in your Machine Learning models

Machine learning (or ML) capabilities are very exciting and promising, but there are significant considerations to keep in mind when planning, implementing and deploying ML. One of the most sensitive topics in our industry is bias in machine learning because a biased system will lead to inaccurate results that could jeopardize the entire project.

There are over 100 human biases at this moment in history, and they all generate different problems. Multiply that by the number of humans working on computers and you'll start to get a sense for just how alarming human bias via machine learning can be. These biases can affect results in two ways:

* _Influence._ “If artificial intelligence said so, then it must be true…”. Although people trust the outputs of artificial intelligence (AI), if the human bias is unnoticed during training it could intensify the problem by involving more people.
* _Automation._ Some AI models are plugged into a programmatic function, which could eventually lead to the automation of the bias.

The silver lining is that AI can help expose truth inside messy data sets, making it possible for algorithms to help us better understand biases we haven’t already isolated. While we can use machine learning’s aptitude for spotting anomalies, machines can’t do it on their own as it requires data analysts to choose the training data that goes into the models.

However, this is how we get to the problem that we had in the first place: if a human is the one that chooses, then biases can appear. So how do we tackle this loop? This article will take you through a couple of practices that can help you detect and mitigate bias in your next machine learning model.

## Choose a representative training data set

Even though data scientists do much of the work, it's up to everyone participating in the project to actively guard against bias in data selection. It’s very important to make sure the training data is diverse and includes different groups, but segmentation in the model can be problematic unless the real data is similarly segmented.

It is not recommended to have different models for different groups. If the data is insufficient for one group, using weighting to increase its importance in training is possible, but it has to be done with extreme caution. It can lead to unexpected new biases, like picking up on random noise as trends.There is the practice of creating classifiers that will identify biased featured data which mostly applies to ingesting text content. These classifiers can then be used in a whole unsupervised context.

## Choose the right learning model for your needs

All AI models are unique so there isn’t one to follow that will avoid bias, but there are a couple of parameters that can be observed by your team as it’s building. 

Supervised and unsupervised learning models have their respective pros and cons. Unsupervised models that cluster or do dimensional reduction can learn bias from their data set. If belonging to a group highly correlates to the behavior of another group, the model can mix up the two of them. And while supervised models allow for more control over bias in data selection, that control can introduce human bias into the process.

Non-bias through ignorance, excluding sensitive information from the model, may seem like a workable solution, but it still has vulnerabilities. In order to harness the full potential of a model, your data scientists have to identify the best one for each situation. Talking through the different strategies they can take when building a model will prevent and fix vulnerabilities in an incipient stage, even if it means the process will take longer.

## Monitor performance using real data

When building algorithms, simulating real-world applications as much as possible can prevent the emergence of discriminatory models. The use of test groups on algorithms that are already in production is not advised, instead, running statistical methods against real data whenever possible, is ideal.

There are two types of equality that you can look for when you’re examining data: 1)
equality of outcome and 2) equality of opportunity. For example, if the AI you’re working on approves loans, result equality would mean that people from all cities get loans at the same rates, while with the opportunity equality would mean that people who would have returned the loan are given the same rates regardless of city. Without the latter, the former could still hide if one city has a culture that makes defaulting on loans common.

Although result equality is easier to prove, it can show potentially skewed data. On the other hand, proving opportunity equality is harder, but has moral validity. Ensuring both types of equality is often impossible, but oversight and real-world testing should be the best way to reduce or eliminate biases.

## Conclusion 

Machine learning is one of the most exciting technical capabilities with real-world business value in the last decade. When combined with big data technology and massive computing capability available via the public cloud, machine learning promises to change how people interact with technology, and potentially entire industries. But as promising as machine-learning technology is, it requires careful planning to avoid unintended biases.

AscentCore has a deep understanding of AI and ML and can help you expose accepted biases, while creating a more ethical understanding of tricky problems. [Get in touch](https://www.ascentcore.com/contact.html) with us today to see how we can help with AI services.