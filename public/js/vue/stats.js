var stats = new Vue({
    el: '#stats',
    data: {
      chapters: [
        {
          title: 'Chapter 3',
          definitions: [
            { term: 'Segmented bar graph', definition: 'Also known as a stacked bar graph, solves the shortcomings of the pie chart in that it makes it easy to compare different areas in the graph.'},
            { term: 'SOCS', definition: 'Shape, outliers, center, and spread(variability) of a distribution.'},
            { term: 'Stem', definition: 'First part of a number and consists of beginning digits. '},
            { term: 'Leaf', definition: 'Last part of a number and consists of final digits.  '},
            { term: 'Time series plot', definition: 'simple graph of data collected over time that can be invaluable in determining trends.'},

          ],
          concepts: [
            { title: 'Summarizing categorical data', text: 'Categorical data can be summarized in a frequency distribution and is best displayed using a bar chart.  '},
            { title: 'Pie Charts', text: 'Awesome for categorical data when there are FEW categories to graph.'},
            { title: 'Stem and leaf plots', text: 'Just google if need to.  Pretty simple stuff.'},
            { title: 'Bivariate data', text: 'Use scatterplots to graph.'},
            { title: 'Treatments', text: 'If we randomly assign people or items to treatments, then we can draw conclusions.'},
            { title: 'Random assign', text: 'If we randomly select our sample from the population of interest, then we can generalize to the entirety of the population from what we found in the sample.'},
          ],
        },
        {
          title: 'Chapter 5',
          definitions: [
            { term: 'Z-score', definition: 'Measure of how many standard deviation below or above the population mean, a raw score is.  Typically paced on a normal/bell curve.'},
            { term: 'Correlation Coefficient', definition: 'Measurement of the strength of correlation between the x and y values.  Often represented as an \'r\''},
            { term: 'Influential Points', definition: 'Pull or skew the graph'},
            { term: 'IQR vs Std Deviation', definition: 'IQR is often reported using the "five-number summary," which includes: minimum, first quartile, median, third quartile and maximum. Like mean and standard deviation, median and IQR measure the central tendency and spread, respectively, but are robust against outliers and non-normal data'},
            { term: 'Influential Point', definition: 'Pull or skew the graph'},
            { term: 'Empirical Rule', definition: '68% of data within 1 standar deviation, 95% within 2 standard deviations, 99.7% within 3 standard deviations of the respective means* '},
            { term: 'Influential', definition: 'Pull or skew the graph'},
          ],
          concepts: [
            { title: 'Computing Z-scores', text: 'To find the Z score of a sample, you"ll need to find the mean, variance and standard deviation of the sample. To calculate the z-score, you will find the difference between a value in the sample and the mean, and divide it by the standard deviation.  Additionally z-score equal to 0 is element equal to the mean.  Less then 0 is less than mean, greater is greater than mean. '},
            { title: 'Cumulative Relative Frequency Chart', text: 'Interested in knowing the relative Frequency up to a given value. '},
            { title: 'N vs n', text: 'Lowercase is sample, uppercase is population. '},
            { title: 'Identifying exponential graphs for transformations', text: 'Exponential models hit a nonzero point on the y axis.'},
            { title: '*Linear', text: 'Value @ x=0: finite.  Value as x grows: infinite '},
            { title: '*Exponential', text: 'Value @ x=0: finite.  Value as x grows: 0 or infinite. '},
            { title: '*Power', text: 'Value @ x=0: 0 or infinite.  Value as x grows: infinite or 0.  Example growing is like 1/x, 1^2, 10^2, 100^2, 1000^2, 10000^2'},
            { title: '*Log', text: 'Value @ x=0: neg. infinity.  Value as x grows: infinite but slowly '},
            { title: '*1/x', text: 'Value @ x=0: infinite.  Value as x grows: 0. '},
            { title: '*Transforming graphical data to fit to a trendline', text: 'Checkout prework 5b for example practice problems'},
            { title: 'V-lookups', text: 'Vertical lookup in a table.  For more info checkout <https://support.office.com/en-us/article/VLOOKUP-What-it-is-and-when-to-use-it-5984e27b-4f0d-431e-83b1-7ab062c75493?CorrelationId=07b897d3-f9a5-4ab7-a864-a4d6c58a0e45&ui=en-US&rs=en-US&ad=US&ocmsassetID=RZ101862716>Documentation</a>'},
            { title: 'Pearson\'s Sampel Correlation Coefficient', text: 'Measures the strength of any linear relationship between two numerical variables.'},
            { title: 'Properties of r (the correlation coefficient.)', text: '1) Value of r is independent of any measurement.  (unitless, can\'t do kg^2).  2) The value of r does not depend on which of the two variables is considered x.  3) Value of r is between -1 and +1.  +1 is string upper limit correlation.   4) correlation of r=1 only occurs when all data points on scatter on the same line.  5) the measure of r is the extent to which the x and y values are linearly related.  '},
            { title: '', text: ''},

          ],
        },
      ]
    }
});
