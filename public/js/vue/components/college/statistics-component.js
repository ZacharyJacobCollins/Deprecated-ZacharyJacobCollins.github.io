//Statistics
Vue.component('statistics-component', {
  template:
  `
      <!--Page Content-->
          <h1> Statistics 360 </h1>
          <h4><a href="http://people.emich.edu/aross15/" style="definition-decoration: none;">Link to Professor Ross' Page</a></h4>
          <h4><a href="#" style="definition-decoration: none;">*Star next to definition or concept denotes likely to be on exam.  </a></h4>
          <br />

          <!-- Chapter 3 -->
          <h2> Chapter 3</h2>
            <template v-for="chapter in chapters">
              <template v-if="chapter.term == 'Chapter 3'">
                <h4> Definitions </h4>
                <ul>
                  <template v-for="definition in chapter.definitions">
                      <li><strong>{{ definition.term }}</strong>: {{definition.definition}}</li>
                  </template>
                </ul>
                <h4>Concepts </h4>
                <ul>
                  <template v-for="concept in chapter.concepts">
                      <li><strong>{{ concept.term }}</strong>: {{ concept.definition }}</li>
                  </template>
                </ul>
              </template>
            </template>
            <!-- Chapter 3 -->

            <br />
            <hr />

            <!-- Chapter 5 -->
            <h2> Chapter 5</h2>
              <template v-for="chapter in chapters">
                <template v-if="chapter.term == 'Chapter 5'">
                  <h4> Definitions </h4>
                  <ul>
                    <template v-for="definition in chapter.definitions">
                        <li><strong>{{ definition.term }}</strong>: {{definition.definition}}</li>
                    </template>
                  </ul>
                  <h4>Concepts </h4>
                  <ul>
                    <template v-for="concept in chapter.concepts">
                        <li><strong>{{ concept.term }}</strong>: {{ concept.definition }}</li>
                    </template>
                  </ul>
                </template>
              </template>
              <!-- Chapter 5 -->

              <br />
              <hr />

              <!-- Chapter 6 -->
              <h2> Chapter 6</h2>
                <template v-for="chapter in chapters">
                  <template v-if="chapter.term == 'Chapter 6'">
                    <h4> Definitions </h4>
                    <ul>
                      <template v-for="definition in chapter.definitions">
                          <li><strong>{{ definition.term }}</strong>: {{definition.definition}}</li>
                      </template>
                    </ul>
                    <h4>Concepts </h4>
                    <ul>
                      <template v-for="concept in chapter.concepts">
                          <li><strong>{{ concept.term }}</strong>: {{ concept.definition }}</li>
                      </template>
                    </ul>
                  </template>
                </template>
                <!-- Chapter 6 -->

                <br />
                <hr />

                <!-- Chapter 7 -->
                <h2> Chapter 7</h2>
                  <template v-for="chapter in chapters">
                    <template v-if="chapter.term == 'Chapter 7'">
                      <h4> Definitions </h4>
                      <ul>
                        <template v-for="definition in chapter.definitions">
                            <li><strong>{{ definition.term }}</strong>: {{definition.definition}}</li>
                        </template>
                      </ul>
                      <h4>Concepts </h4>
                      <ul>
                        <template v-for="concept in chapter.concepts">
                            <li><strong>{{ concept.term }}</strong>: {{ concept.definition }}</li>
                        </template>
                      </ul>
                    </template>
                  </template>
                  <!-- Chapter 7 -->

                  <br />
                  <hr />

                  <!-- Chapter 10 -->
                  <h2> Chapter 10</h2>
                    <template v-for="chapter in chapters">
                      <template v-if="chapter.term == 'Chapter 10'">
                        <h4> Definitions </h4>
                        <ul>
                          <template v-for="definition in chapter.definitions">
                              <li><strong>{{ definition.term }}</strong>: {{definition.definition}}</li>
                          </template>
                        </ul>
                        <h4>Concepts </h4>
                        <ul>
                          <template v-for="concept in chapter.concepts">
                              <li><strong>{{ concept.term }}</strong>: {{ concept.definition }}</li>
                          </template>
                        </ul>
                      </template>
                    </template>
                    <!-- Chapter 10 -->

                    <br />
                    <hr />

      <!--Page Content-->
  `,
  data: function () {
      return {
        chapters: [
          {
            term: 'Independent research',
            definitions: [
              { term: 'Standard Deviation', definition: 'The measurement of how close the data surrounds the mean.' },
            ],
            concepts: [
              { term: 'Yes or no questions on a survey are generally bad.', definition: 'Thinking about myself when answering survey questions, generally on a yes or no question there is a \'but\' involved.  Yes but bleh.  It eliminates halfways in questions.' },
              { term: '', definition: ''},
            ],
          },
          {
            term: 'Chapter 3',
            definitions: [
              { term: 'Segmented bar graph', definition: 'Also known as a stacked bar graph, solves the shortcomings of the pie chart in that it makes it easy to compare different areas in the graph.'},
              { term: 'SOCS', definition: 'Shape, outliers, center, and spread(variability) of a distribution.'},
              { term: 'Stem', definition: 'First part of a number and consists of beginning digits. '},
              { term: 'Leaf', definition: 'Last part of a number and consists of final digits.  '},
              { term: 'Time series plot', definition: 'simple graph of data collected over time that can be invaluable in determining trends.'},

            ],
            concepts: [
              { term: 'Summarizing categorical data', definition: 'Categorical data can be summarized in a frequency distribution and is best displayed using a bar chart.  '},
              { term: 'Pie Charts', definition: 'Awesome for categorical data when there are FEW categories to graph.'},
              { term: 'Stem and leaf plots', definition: 'Just google if need to.  Pretty simple stuff.'},
              { term: 'Bivariate data', definition: 'Data that has 2 variables.  Often reqpresented as a scatter plot.'},
              { term: 'Univariate data', definition: 'Data that has 1 variable.  Can put all observations in a list of numbers.'},
              { term: 'Treatments', definition: 'If we randomly assign people or items to treatments, then we can draw conclusions.'},
              { term: 'Random assign', definition: 'If we randomly select our sample from the population of interest, then we can generalize to the entirety of the population from what we found in the sample.'},
            ],
          },
          {
            term: 'Chapter 5',
            definitions: [
              { term: 'Z-score', definition: 'Measure of how many standard deviation below or above the population mean, a raw score is.  Typically paced on a normal/bell curve.'},
              { term: 'Correlation Coefficient', definition: 'Measurement of the strength of correlation between the x and y values.  Often represented as an \'r\''},
              { term: 'Influential Points', definition: 'Pull or skew the graph'},
              { term: 'IQR vs Std Deviation', definition: 'IQR is often reported using the "five-number summary," which includes: minimum, first quartile, median, third quartile and maximum. Like mean and standard deviation, median and IQR measure the central tendency and spread, respectively, but are robust against outliers and non-normal data'},
              { term: 'Influential Point', definition: 'Pull or skew the graph'},
              { term: 'Empirical Rule', definition: '68% of data within 1 standar deviation, 95% within 2 standard deviations, 99.7% within 3 standard deviations of the respective means* '},
              { term: 'Influential', definition: 'Pull or skew the graph'},
              { term: 'Population correlation coefficient', definition: 'Denoted by p.  1) between +1 and -1 2) if +1 or -1 all points on exact straight line.  '},
              { term: 'Regression analysis', definition: 'use information regarding one variable (x) to draw conclusions about a second variable(y)'},
              { term: 'Refresher on equation of a line', definition: 'y = ax + b'},
              { term: 'Regression analysis', definition: 'the collection of methods involving the fitting of lines, curves, etc. to bivariate and multivariate data.  X is the independent variable.  Y is the dependent or response variable. '},
              { term: 'Residuals', definition: 'Vertical deviations on a graph'},
              { term: '', definition: ''},
              { term: '', definition: ''},
            ],
            concepts: [
              { term: 'Computing Z-scores', definition: 'To find the Z score of a sample, you"ll need to find the mean, variance and standard deviation of the sample. To calculate the z-score, you will find the difference between a value in the sample and the mean, and divide it by the standard deviation.  Additionally z-score equal to 0 is element equal to the mean.  Less then 0 is less than mean, greater is greater than mean. '},
              { term: 'Cumulative Relative Frequency Chart', definition: 'Interested in knowing the relative Frequency up to a given value. '},
              { term: 'N vs n', definition: 'Lowercase is sample, uppercase is population. '},
              { term: 'Identifying exponential graphs for transformations', definition: 'Exponential models hit a nonzero point on the y axis.'},
              { term: '*Linear', definition: 'Value @ x=0: finite.  Value as x grows: infinite '},
              { term: '*Exponential', definition: 'Value @ x=0: finite.  Value as x grows: 0 or infinite. '},
              { term: '*Power', definition: 'Value @ x=0: 0 or infinite.  Value as x grows: infinite or 0.  Example growing is like 1/x, 1^2, 10^2, 100^2, 1000^2, 10000^2'},
              { term: '*Log', definition: 'Value @ x=0: neg. infinity.  Value as x grows: infinite but slowly '},
              { term: '*1/x', definition: 'Value @ x=0: infinite.  Value as x grows: 0. '},
              { term: '*Transforming graphical data to fit to a trendline', definition: 'Checkout prework 5b for example practice problems'},
              { term: 'V-lookups', definition: 'Vertical lookup in a table.  For more info checkout <https://support.office.com/en-us/article/VLOOKUP-What-it-is-and-when-to-use-it-5984e27b-4f0d-431e-83b1-7ab062c75493?CorrelationId=07b897d3-f9a5-4ab7-a864-a4d6c58a0e45&ui=en-US&rs=en-US&ad=US&ocmsassetID=RZ101862716>Documentation</a>'},
              { term: 'Pearson\'s Sampel Correlation Coefficient', definition: 'Measures the strength of any linear relationship between two numerical variables.'},
              { term: 'Properties of r (the correlation coefficient.)', definition: '1) Value of r is independent of any measurement.  (unitless, can\'t do kg^2).  2) The value of r does not depend on which of the two variables is considered x.  3) Value of r is between -1 and +1.  +1 is string upper limit correlation.   4) correlation of r=1 only occurs when all data points on scatter on the same line.  5) the measure of r is the extent to which the x and y values are linearly related.  '},
              { term: 'Correlation is not causation', definition: 'r can be large, but does not mean that either of the two variables caused another.  They are just associated.  '},
              { term: 'Positive vs. Negative correlation', definition: 'Negative is when variables move in opposite directions, when one goes up other goes down.  Positive is in same direction.'},
              { term: 'Correlation coefficient of 0.', definition: 'Means there is a weak or no correlation between two variables.'},
              { term: 'r = 1', definition: 'slope of 1/1.'},
              { term: 'r = -1', definition: 'slope of -1/1.'},
              { term: 'R^2', definition: 'R-squared is a statistical measure of how close the data are to the fitted regression line. It is also known as the coefficient of determination, or the coefficient of multiple determination for multiple regression. ... 0% indicates that the model explains none of the variability of the response data around its mean'},
              { term: 'Equation of least squares', definition: 'Measures the vertical distance of the standard deviation of a line to measure how good of a fit it is.  If line is above point that\'s a positive deviation, if below, negative'},
              { term: 'Danger of extrapolation', definition: 'Make sure when using equation of least squares to only fit inside the the set. '},
              { term: 'Sample regression line', definition: 'the resulting line from the equation of least squares'},
              { term: 'Residual plot', definition: 'Plot of the (x, residual pairs), also, isolated points, or a pattern of points in the residual plot indicate potential problems.  '},
              { term: 'Negatively related', definition: 'As y increases, x decreases, and vice versa. '},
              { term: 'SPSS', definition: 'Statistics software, used for statistical analysis'},
              { term: 'Causality', definition: 'Causality is VERY difficult to prove'},
              { term: 'Sum of Squares', definition: 'Tells you how much variance is in the dependent variable.  To calculate.  Step 1: Find the mean by adding the numbers together and dividing by the number of items in the set.  Step 2: Subtract the mean from each of your data items.  Step 3: Square your results from Step 3. Step 4: Sum (add up) all of your numbers.'},
              { term: 'X-bar', definition: 'The sample mean'},
              { term: '', definition: ''},
              { term: '', definition: ''},
              { term: '', definition: ''},
            ],
          },
          {
            term: 'Chapter 6',
            definitions: [
              { term: 'Multichoose', definition: 'Not part of course, but does order matter?'},
              { term: 'Chance experiment', definition: 'any activity or situation in which there is uncertainty about which of two or more possible outcomes will result'},
              { term: 'Sample space', definition: 'The collection of all possible outcomes for a chance experiment.  Can be shown as an ordered pair or a tree diagram.'},
              { term: 'Event', definition: 'Is any colletion of outcomes from the sample space of a chance experiment.'},
              { term: 'Simple event', definition: 'Event consisting of exactly one outcome'},
              { term: 'Event hybrids', definition: 'https://drive.google.com/open?id=0B275NCmWW8z1dGxRRDE4QjMzRlU'},
              { term: 'Disjoint/mutually exclusive', definition: 'Two events have no common outcomes'},
              { term: 'Classical definition of Probability', definition: 'Counting up the number of chances, and putting it over the top of the number of possible outcomes, and then dividing.  ONLY WORKS WHEN THERE ARE A FINITE SET OF OUTCOMES.  Or dart on dartboard with experienced vs inexperienced player.'},
              { term: 'Law or large numbers', definition: 'Basically the more you repeat a thing that has a probabilistic chance, the close the reality gets to the probability'},
              { term: 'Relative frequency probability', definition: 'Based on data'},
              { term: 'Subjective probability', definition: 'Based on a person\'s beliefs'},
              { term: '', definition: ''},
              { term: '', definition: ''},
            ],
            concepts: [
              { term: 'How many ways to put a list in order', definition: 'Where list size is n, n! (factorial)'},
              { term: 'Conditional probability', definition: 'Do umbrellas cause rain? No.  Rain causes umbrella use.  '},
              { term: '*Bayes Theorem', definition: 'How to divide a table with new data.  How we update our data with new data.  The plane fire update process thing.  '},
              { term: 'AND vs OR boolean operations', definition: 'And is multiplication, Or is ..  '},
              { term: 'Probability Mass Function = PMF', definition: 'p(x) = Pr(X = x)'},
              { term: 'Pascall\s triangle:', definition: 'can be computeed using twos coefficients'},
              { term: '', definition: ''},
              { term: '', definition: ''},
            ],
          },
          {
            term: 'Chapter 7',
            definitions: [
              { term: 'Random variable', definition: 'numerical variable whose value depends on the outcome of a chance experiment. Associates a numerical value with each outcome of a chance experiment'},
              { term: 'Discrete random variable', definition: 'Random variable is discrete if its set of possible values is a collection of isolated points along the number line'},
              { term: 'Continuous random variable', definition: 'Random variable is continuous if its set of posbile values includes an entire interval on the number line'},
            ],
            concepts: [
              { term: 'How many samples to take in etc. ', definition: 'Sample SIZE varies, but you always just take a single sample.  '},
              { term: 'We use lowecase letters like, \'x\' to represent random variables', definition: ''},
            ],
          },
          {
            term: 'Chapter 10',
            definitions: [
              { term: 'Power', definition: 'Probability of not making a mistake'},
              { term: 'Beta', definition: 'Probability of making an error, shoot for only 20% in social sciences '},
              { term: 'T-test', definition: 'An analysis of two populations means through the use of statistical examination; a t-test with two samples is commonly used with small sample sizes, testing the difference between the samples when the variances of two normal distros are not known.'},
              { term: 'Type 2 error: ', definition: ''},
              { term: 'Type 1 error: ', definition: ''},
              { term: 'H0', definition: 'null hypothesis.  Sample observations result purely from chance.'},
              { term: 'HA', definition: 'alternative hypothesis.  hypothesis that sample observations are influenced by some non-random cause. '},
              { term: 'Hypothesis', definition: 'A claim aboutt he value of a population characteristic'},
              { term: 'Null hypothesis, H0', definition: 'The hypothesis initially assumed to be true.  It has the form H0: population characteristic = hypothesized value.'},
              { term: 'Alternative hypothesis', definition: 'A hypothesis that specifies a claim that is contradictory to H0 and is judged the more plausible claim when H0 is rejected.'},
              { term: ' A B testing ', definition: ' Send different things to different people and see which one works better'},
              { term: 'Type I error', definition: 'Rejecting H0 when H0 is true; the probability of a Type I error is denoted by alpha and is referrred to as the significance level for the test. '},
              { term: 'Type II error', definition: 'Not rejecting H0 when H0 is false;  the probability of a Type II error is denoted by Beta'},
              { term: 'Test statistic', definition: 'A value computer from sample data that is then used as the basis for making a decision between H0 and H1'},
              { term: 'Page 628', definition: 'All of the formulas and stuff'},
              { term: 'Skipping the 2 - sample "pooled" t-test.', definition: 'aka homoskedastic'},
              { term: 'Generic confidence interval (CI): ', definition: 'estimater +- critical value times the standard error of estimater'},
              { term: 'Generic Hypothesis test (HT) ', definition: '(estimater - null hypothesis)/(standard error of estimator).  So this asks could the difference be plausibly due to chance?'},
              { term: 'Pythagorean theorm of stats', definition: 'var(xbarA-xbarB) = var(xbarA) + var(-xbarB) if independent or uncorrelated.  '},
              { term: 'Standard error is basically ', definition: 'the standard deviation'},
              { term: 'SE(xbarA - xbarB) = sqrt(sa^2 + ', definition: ''},
              { term: 'Different spreads: ', definition: 'heteroskedastics'},
              { term: 'Since the pvalue of .53 in the given equation in notes, is above alpha = .05, we fail to reject h0.  We don\'t have strong evidence that the means are not equal.', definition: ''},
              { term: 'For C, same idea: estimator +- the crit value. * SE.  ', definition: ''},
              { term: 'Assumptions that are made for both CI and HT: ', definition: 'There were simple random samples, independent samples, '},
              { term: '', definition: ''},
              { term: '', definition: ''},
              { term: '', definition: ''},
            ],
            concepts: [
              { term: 'You can do stuff to graphs to make stuff work better but not always irl.  F. ', definition: ''},
              { term: 'Moving Ha away from H0 ', definition: 'Beta- got small, power got bigger, alpha didn\'t change.  '},
              { term: 'Changing the cutoff', definition: 'if Beta got smaller alpha got bigger.'},
              { term: '"rejecting the null: "', definition: ' means rejecting the null hypothesis'},
              { term: 'what can\'t hypothesis test prove: ', definition: ' can never prove that things are equal.  even if xbar is very close to mew. '},
              { term: 'hypothesis test: ', definition: ' used to determine whether there is enough evidence in a sample of data to infer that a certain condition is true for an entire population.'},
              { term: 'confidence interval: ', definition: 'khan link: https://www.khanacademy.org/math/statistics-probability/confidence-intervals-one-sample/estimating-population-mean/v/confidence-interval-1'},
              { term: 'Two types of hypothesis tests - t tests or z tests.  Practice both: ', definition: 'Khan video: https://www.khanacademy.org/math/statistics-probability/significance-tests-one-sample/tests-about-population-mean/v/hypothesis-testing-and-p-values'},
              { term: '', definition: ''},
              { term: '', definition: ''},
              { term: '', definition: ''},
              { term: '', definition: ''},
              { term: '', definition: ''},
            ],
          },
        ]
    };
  },
});
