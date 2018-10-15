var queries = [
  {
    id: 0,
    text: "Which statistical test should I use?",
    subhead: "Web app flowchart",
    disclaimer: "* Based off Rosner, 8th ed.",
    answers: [{
      text: "Begin!",
      target: 1
    }]
  },
  {
    id: 1,
    text: "How many variables of interest do you have?",
    subhead: "This would be the total number of variables you are seeking a statistical test for.",
    answers: [{
      text: "1 variable",
      target: 2
    }, {
      text: "2 variables",
      target: 70
    }, {
      text: "More than 2 variables",
      target: 69
    }]
  },
  {
    id: 2,
    text: "How many samples are you working with?",
    answers: [{
      text: "Analyzing 1 sample",
      target: 3
    }, {
      text: "Comparing 2 samples",
      target: 22
    }, {
      text: "Comparing more than 2 samples",
      target: 64
    }]
  },
  {
    id: 3,
    text: "Which is most similar to the underlying distribution of the data?",
    subhead: "Test for normality with the Shapiro-Wilk test.",
    answers: [{
      text: "Normal distribution (or you can assume the central limit theorem holds)",
      target: 4
    }, {
      text: "Binomial distribution",
      target: 13
    }, {
      text: "Poisson distribution",
      target: 18
    }, {
      text: "Other, or unknown distribution",
      target: null
    }]
  },
  {
    id: 4,
    text: "Which parameter is your inference based on?",
    subhead: "Are you interested in learning more about the mean, or about the variance, of your sample?",
    answers: [{
      text: "Infering based on sample mean (x̄)",
      target: 5
    }, {
      text: "Inference based on sample variance (s2)",
      target: 11
    }]
  },
  {
    id: 5,
    text: "Do you know the standard deviation (σ) of the population?",
    answers: [{
      text: "Population standard deviation (σ) is known",
      target: 6
    }, {
      text: "Population standard deviation (σ) not known",
      target: 8
    }]
  },
  {
    id: 6,
    text: "One-sample z-test",
    subhead: "What is the likelihood a random sample of the population equal in size to your sample would vary from the population mean (μ) as much as does your sample mean (x̄)? Assumptions: one-sample problem with one, normally-distributed variable of interest, concerning the sample mean (x̄) where the population standard deviation (σ) is known.",
    answers: []
  },
  {
    id: 7,
    text: "Is the time of events important?",
    answers: [{
      text: "Yes - survival analysis",
      target: 47
    }, {
      text: "No",
      target: 21
    }]
  },
  {
    id: 8,
    text: "One-sample t-test",
    subhead: "What is the likelihood a random sample of the population equal in size to your sample would vary from the population mean (μ) as much as does your sample mean (x̄)? Assumptions: one-sample problem with one, normally distributed variable of interest, concerning the sample mean (μ) but where the population standard deviation (σ) is unknown.",
    answers: [{
      text: "Who created the t-test?",
      target: 1001
    }]
  },
  {
    id: 9,
    text: "Multiple-regression methods",
    answers: []
  },
  {
    id: 11,
    text: "One sample chi-squared test for variances",
    subhead: "Caution: very sensitive to non-normality. Assumptions: one-sample problem with one, normally distributed variable of interest, concerning the sample variance, σ.",
    answers: []
  },
  {
    id: 12,
    text: "Kappa statistic",
    answers: []
  },
  {
    id: 13,
    text: "Is the normal approximation valid?",
    subhead: "Say n = number of trials (e.g. number of coins flipped) and p = constant probability of success (e.g. probability of flipping heads for any given coin) ... The normal approximation is probably valid if both np > 10 and n*(1-p) > 10.",
    answers: [{
      text: "Yes",
      target: 14
    }, {
      text: "No",
      target: 16
    }]
  },
  {
    id: 14,
    text: "Normal-theory methods one-sample binomial test",
    subhead: "This test estimates the proportion of possible outcomes more extreme under a normal curve than your result. Assumptions: one-sample problem with one, binomially distributed variable of interest for which the normal approximation is valid.",
    answers: []
  },
  {
    id: 15,
    text: "Contingency-table methods",
    subhead: "Note: needs more elaboration.",
    answers: []
  },
  {
    id: 16,
    text: "Exact methods one-sample binomial test",
    subhead: "This test calculates the proportion of possible outcomes more extreme than your result. Assumptions: one-sample problem with one, binomially distributed variable of interest for which the normal approximation is not valid.",
    answers: []
  },
  {
    id: 17,
    text: "Which type of test are you interested in?",
    answers: [{
      text: "Test of association",
      target: 15
    }, {
      text: "Test of reproducibility",
      target: 12
    }]
  },
  {
    id: 18,
    text: "One-sample Poisson test",
    subhead: "Assumptions: one-sample problem with one, Poisson-distributed variable of interest.",
    answers: []
  },
  {
    id: 19,
    text: "Higher-way ANOVA",
    answers: []
  },
  {
    id: 20,
    text: "Use another underlying distribution or use nonparametric methods",
    subhead: "Assumptions: one-sample problem with one variable of interest that doesn't approximate a normal, binomial, or Poisson distribution.",
    answers: []
  },
  {
    id: 21,
    text: "Multiple logistic-regression methods",
    answers: []
  },
  {
    id: 22,
    text: "Is the underlying distribution normal or can the central limit theorem be assumed to hold?",
    subhead: "Test for normality with the Shapiro-Wilk test.",
    answers: [{
      text: "Yes",
      target: 23
    }, {
      text: "No",
      target: 31
    }]
  },
  {
    id: 23,
    text: "Are the inferences concerning means?",
    answers: [{
      text: "Yes",
      target: 24
    }, {
      text: "No",
      target: 29
    }]
  },
  {
    id: 24,
    text: "Are your samples independent?",
    answers: [{
      text: "Yes",
      target: 25
    }, {
      text: "No",
      target: 28
    }]
  },
  {
    id: 25,
    text: "Are the variances of the two samples significantly different?",
    subhead: "Determine if variances differ with the F test.",
    answers: [{
      text: "Yes, different",
      target: 26
    }, {
      text: "No, not different",
      target: 27
    }]
  },
  {
    id: 26,
    text: "Two-sample t-test with unequal variances",
    answers: []
  },
  {
    id: 27,
    text: "Two-sample t-test with equal variances",
    answers: []
  },
  {
    id: 28,
    text: "Paired t-test",
    answers: []
  },
  {
    id: 29,
    text: "Are the inferences concerning variances?",
    answers: [{
      text: "Yes",
      target: 30
    }, {
      text: "No",
      target: null
    }]
  },
  {
    id: 30,
    text: "Two-sample F test to compare variances",
    subhead: "Caution: very sensitive to non-normality. Assumptions: ",
    answers: []
  },
  {
    id: 31,
    text: "Is the underlying distribution binomial?",
    answers: [{
      text: "Yes",
      target: 32
    }, {
      text: "No",
      target: 46
    }]
  },
  {
    id: 32,
    text: "Are the samples independent?",
    subhead: "For example, paired data would not be independent.",
    answers: [{
      text: "Yes",
      target: 33
    }, {
      text: "No",
      target: 45
    }]
  },
  {
    id: 33,
    text: "Are all expected values ≥5?",
    answers: [{
      text: "Yes",
      target: 34
    }, {
      text: "No",
      target: 44
    }]
  },
  {
    id: 34,
    text: "What size contingency table can you create?",
    answers: [{
      text: "2x2",
      target: 35
    }, {
      text: "2xk in which k>2",
      target: 38
    }, {
      text: "RxC in which R>2 and C>2",
      target: 43
    }]
  },
  {
    id: 35,
    text: "Is confounding present?",
    answers: [{
      text: "Yes",
      target: 36
    }, {
      text: "No",
      target: 37
    }]
  },
  {
    id: 36,
    text: "Use two-sample test for binomial proportions or the 2x2 contingency table methods",
    subhead: "Assumptions: ",
    answers: []
  },
  {
    id: 37,
    text: "Use the Mantel-Haenszel test",
    subhead: "Assumptions: ",
    answers: []
  },
  {
    id: 38,
    text: "Are you interested in the trend over k binomial proportions?",
    answers: [{
      text: "Yes",
      target: 39
    }, {
      text: "No",
      target: 42
    }]
  },
  {
    id: 39,
    text: "Is confounding present?",
    answers: [{
      text: "Yes",
      target: 40
    }, {
      text: "No",
      target: 41
    }]
  },
  {
    id: 40,
    text: "Mantel Extension Test",
    answers: []
  },
  {
    id: 41,
    text: "Chi-squared test for trend",
    answers: []
  },
  {
    id: 42,
    text: "Chi-squared test for heterogeneity for 2xk tables",
    answers: []
  },
  {
    id: 43,
    text: "Chi-squared test for RxC tables",
    answers: []
  },
  {
    id: 44,
    text: "Fisher's Exact test",
    answers: []
  },
  {
    id: 45,
    text: "McNemar's test",
    answers: []
  },
  {
    id: 46,
    text: "Are you using person-time data?",
    answers: [{
      text: "Yes",
      target: 47
    }, {
      text: "No",
      target: 63
    }]
  },
  {
    id: 47,
    text: "Is this a one-sample problem?",
    subhead: "Note: not sure how this question makes sense since this branch is for problems with at least two samples.",
    answers: [{
      text: "Yes",
      target: 49
    }, {
      text: "No",
      target: null
    }]
  },
  {
    id: 48,
    text: "One-sample test for incidence rates",
    answers: []
  },
  {
    id: 49,
    text: "Do the incidence rates remain constant over time?",
    answers: [{
      text: "Yes",
      target: 50
    }, {
      text: "No",
      target: 56
    }]
  },
  {
    id: 50,
    text: "Is this a two-sample problem?",
    subhead: "Note: this still makes no sense as this is the second time this question is asked in this branch.",
    answers: [{
      text: "Yes",
      target: 51
    }, {
      text: "No",
      target: 54
    }]
  },
  {
    id: 51,
    text: "Is confounding present?",
    answers: [{
      text: "Yes",
      target: 52
    }, {
      text: "No",
      target: 53
    }]
  },
  {
    id: 52,
    text: "Methods for stratified person-time data",
    answers: []
  },
  {
    id: 53,
    text: "Two-sample test for comparison of incidence rates",
    answers: []
  },
  {
    id: 54,
    text: "Are you interested in the trend over more than two exposure groups?",
    answers: [{
      text: "Yes",
      target: 55
    }, {
      text: "No: not an option",
      target: null
    }]
  },
  {
    id: 55,
    text: "Test of trend for incidence rates",
    answers: []
  },
  {
    id: 56,
    text: "Are you trying to conduct survival analysis?",
    answers: [{
      text: "Yes",
      target: 57
    }, {
      text: "No: not an option",
      target: null
    }]
  },
  {
    id: 57,
    text: "Are you interested in the comparison of survival curves of two groups with limited control of covariates?",
    answers: [{
      text: "Yes",
      target: 58
    }, {
      text: "No",
      target: 59
    }]
  },
  {
    id: 58,
    text: "Log-rank test",
    answers: []
  },
  {
    id: 59,
    text: "Are you interested in the effects of several risk factors on survival?",
    answers: [{
      text: "Yes",
      target: 60
    }, {
      text: "No: not an option",
      target: null
    }]
  },
  {
    id: 60,
    text: "Are you willing to assume several curve comes from a weibull distribution?",
    subhead: "Note: what does any of this mean?",
    answers: [{
      text: "Yes",
      target: 61
    }, {
      text: "No",
      target: 62
    }]
  },
  {
    id: 61,
    text: "Parameter survival methods based on weibull distribution",
    answers: []
  },
  {
    id: 62,
    text: "Cox proportion hazards model",
    answers: []
  },
  {
    id: 63,
    text: "Use another underlying distribution or use nonparametric methods",
    answers: []
  },
  {
    id: 64,
    text: "Is the underlying distribution normal or can the central limit theorem be assumed to hold?",
    subhead: "Test for normality with the Shapiro-Wilk test.",
    answers: [{
      text: "Yes",
      target: 65
    }, {
      text: "No",
      target: 66
    }]
  },
  {
    id: 65,
    text: "One-way ANOVA",
    answers: []
  },
  {
    id: 66,
    text: "Are you using categorical data?",
    answers: [{
      text: "Yes",
      target: 67
    }, {
      text: "No",
      target: 68
    }]
  },
  {
    id: 67,
    text: "Use RxC contingency table methods",
    answers: []
  },
  {
    id: 68,
    text: "Use another underlying distribution or use nonparametric methods such as the Kruskal-Wallis test",
    answers: []
  },
  {
    id: 69,
    text: "What data type is your outcome variable?",
    answers: [{
      text: "Continuous",
      target: 9
    }, {
      text: "Binary",
      target: 7
    }]
  },
  {
    id: 70,
    text: "What type of data are your variables?",
    answers: [{
      text: "Both variables are continuous",
      target: 71
    }, {
      text: "One variable is continuous and one is categorical",
      target: 77
    }, {
      text: "Both variables are ordinal",
      target: 76
    }, {
      text: "Both variables are categorical",
      target: 17
    }]
  },
  {
    id: 71,
    text: "Are you interested in predicting one variable from another or in studying the correlation between two variables?",
    answers: [{
      text: "Prediction",
      target: 72
    }, {
      text: "Studying correlation",
      target: 74
    }]
  },
  {
    id: 72,
    text: "Simple linear regression",
    answers: []
  },
  {
    id: 74,
    text: "Are both variables normally distributed?",
    subhead: "Test for normality with the Shapiro-Wilk test.",
    answers: [{
      text: "Yes",
      target: 75
    }, {
      text: "No",
      target: 76
    }]
  },
  {
    id: 75,
    text: "Pearson correlation methods",
    answers: []
  },
  {
    id: 76,
    text: "Use rank-correlation methods. Are you trying to...?",
    answers: [{
      text: "Compare two groups",
      target: 87
    }, {
      text: "Compare more than two groups",
      target: 88
    }, {
      text: "Look for association between two groups",
      target: 89
    }]
  },
  {
    id: 77,
    text: "How many ways can the categorical data be classified?",
    answers: [{
      text: "1 way",
      target: 78
    }, {
      text: "2 ways",
      target: 82
    }, {
      text: "More than 2 ways",
      target: 85
    }]
  },
  {
    id: 78,
    text: "Is the outcome variable normal or can the central-limit theorem be assumed to hold?",
    subhead: "Test for normality with the Shapiro-Wilk test.",
    answers: [{
      text: "Yes",
      target: 79
    }, {
      text: "No",
      target: 88
    }]
  },
  {
    id: 79,
    text: "Are there covariates to be controlled for?",
    answers: [{
      text: "Yes",
      target: 80
    }, {
      text: "No",
      target: 65
    }]
  },
  {
    id: 80,
    text: "One-way ANCOVA",
    answers: []
  },
  {
    id: 82,
    text: "Are there covariates to be controlled for?",
    answers: [{
      text: "Yes",
      target: 83
    }, {
      text: "No",
      target: 84
    }]
  },
  {
    id: 83,
    text: "Two-way ANCOVA",
    answers: []
  },
  {
    id: 84,
    text: "Two-way ANOVA",
    answers: []
  },
  {
    id: 85,
    text: "Are there covariates to be controlled for?",
    answers: [{
      text: "Yes",
      target: 86
    }, {
      text: "No",
      target: 19
    }]
  },
  {
    id: 86,
    text: "Higher-way ANCOVA",
    answers: []
  },
  {
    id: 87,
    text: "Mann-Whitney U Test",
    subhead: "The Mann–Whitney U test is a nonparametric test of the null hypothesis that it is equally likely that a randomly selected value from one sample will be less than or greater than a randomly selected value from a second sample. - Wikipedia",
    answers: []
  },
  {
    id: 88,
    text: "Conduct a nonparametric ANOVA with the Kruskal-Wallis H Test. What does the test conclude?",
    subhead: "The Kruskal-Wallis H Test, also known as the one-way ANOVA on ranks, is a non-parametric method for testing whether samples originate from the same distribution. - Wikipedia",
    answers: [{
      text: "Rejects the null",
      target: 90
    }, {
      text: "Fails to reject the null",
      target: null
    }]
  },
  {
    id: 89,
    text: "Spearman's Ranked Correlation",
    answers: []
  },
  {
    id: 90,
    text: "Conover-Iman Post Hoc Test",
    subtext: "If Conover-Iman is not an option, use Dunn's Test as an alternate post hoc test for Kruskal-Wallis Test.",
    answers: []
  },
  {
    id: 1001,
    text: "Who created the t-distribution and resultant t-tests?",
    subhead: "The t-statistic was introduced in 1908 by William Sealy Gosset, a chemist working for the Guinness brewery in Dublin, Ireland ('Student' was his pen name). Gosset had been hired due to Claude Guinness's policy of recruiting the best graduates from Oxford and Cambridge to apply biochemistry and statistics to Guinness's industrial processes. Gosset devised the t-test as an economical way to monitor the quality of stout. The Student's t-test work was submitted to and accepted in the journal Biometrika and published in 1908. Company policy at Guinness forbade its chemists from publishing their findings, so Gosset published his statistical work under the pseudonym 'Student'. Guinness had a policy of allowing technical staff leave for study (so-called 'study leave'), which Gosset used during the first two terms of the 1906–1907 academic year in Professor Karl Pearson's Biometric Laboratory at University College London. Gosset's identity was then known to fellow statisticians and to editor-in-chief Karl Pearson. - Wikipedia",
    answers: []
  },
];


function QueryViewModel() {
  var self = this;

  self.querySet = ko.observable();
  self.currentStep = ko.observable();
  self.queryData = ko.observable();
  self.sfw = ko.observable();
  self.navHistory = ko.observableArray();

  // Operations
  self.goToTarget = function(obj) {
    self.navHistory.push(self.currentStep());
    self.currentStep(obj.target);
    self.queryData(self.querySet()[obj.target]);
  }

  self.startOver = function() {
    self.navHistory.removeAll();
    self.goToTarget({target: 0});
  }

  self.stepBack = function() {
    var lastStep = self.navHistory().length > 1 ? self.navHistory.pop() : 0;
    self.currentStep(lastStep);
    self.queryData(self.querySet()[lastStep]);
  }

  self.toggleSFW = function() {
    self.sfw(!self.sfw());
    if (self.sfw()) {
      self.querySet(queriesSFW);
      self.queryData(self.querySet()[self.currentStep()]);
    } else {
      self.querySet(queries);
      self.queryData(self.querySet()[self.currentStep()]);
    }
  }

  var paramsString = document.location.hash.substring(1);
  var params = new Array();
  if (paramsString) {
    var paramValues = paramsString.split("&");
    for (var i = 0; i < paramValues.length; i++) {
      var paramValue = paramValues[i].split("=");
      params[paramValue[0]] = paramValue[1];
    }
  }

  ko.computed(function updateHash() {
    if (self.currentStep()) {
      document.location.hash = self.sfw() ? 'sfw=true&target=' + self.currentStep() : 'target=' + self.currentStep();
    } else {
      document.location.hash = "";
    }
  });

  self.permalink = ko.computed(function makePermalink() {
    var temp = 'http://www.wfplsiu.com/#'
    if (self.currentStep() != 0) {
      temp = temp + 'target=' + self.currentStep();
      self.sfw() ? temp += '&sfw=true' : false;
    } else if (self.sfw()) {
      temp += 'sfw=true';
    }
    return temp;
  })

  params ? paramTarget = params['target'] : params = [];

  params['sfw'] == 'true' ? self.sfw(true) : self.sfw(false);
  self.sfw() ? self.querySet(queriesSFW) : self.querySet(queries);
  if (paramTarget) {
    self.navHistory.push(0);
    self.currentStep(0);
    self.goToTarget({target: paramTarget})
  } else {
    self.goToTarget({target: 0});
  }
}

ko.applyBindings(new QueryViewModel());
