// Mock AI processing service
export const aiService = {
  processTask: async (task) => {
    // Simulate processing delay
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 1000)
    );

    // Mock responses based on task content
    const responses = {
      'analyze leads': {
        result:
          'Lead analysis completed. Found 23 high-potential leads in Q4 pipeline with estimated value of $450K.',
        insights: [
          'Enterprise segment shows 45% growth',
          '3 leads ready for immediate follow-up',
        ],
      },
      'summarize calls': {
        result:
          'Call summary generated: 15 customer calls this week, 12 positive outcomes, 3 follow-ups required.',
        insights: [
          'Customer satisfaction score: 4.8/5',
          '2 upsell opportunities identified',
        ],
      },
      'update client report': {
        result:
          'Client report updated successfully. Added latest metrics and performance indicators for review.',
        insights: [
          'Q3 revenue exceeded targets by 18%',
          'Client engagement increased by 32%',
        ],
      },
      'review sales data': {
        result:
          'Sales data reviewed. Revenue increased by 15% month-over-month, with strongest growth in Enterprise segment.',
        insights: [
          'Enterprise sales up 25%',
          'SMB segment showing steady growth',
        ],
      },
      'generate weekly metrics': {
        result:
          'Weekly metrics report generated. Key highlights: 45 new signups, 22% conversion rate, $125K MRR.',
        insights: [
          'Trial-to-paid conversion: 18%',
          'Churn rate decreased to 2.1%',
        ],
      },
    };

    // Find matching response or use default
    const matchedKey = Object.keys(responses).find((key) =>
      task.toLowerCase().includes(key)
    );

    const response = matchedKey
      ? responses[matchedKey]
      : {
          result: `Task "${task}" processed successfully. Analysis complete with recommendations for optimization.`,
          insights: [
            'Task completed successfully',
            'No specific patterns detected',
          ],
        };

    return {
      task,
      status: 'completed',
      result: response.result,
      insights: response.insights,
      timestamp: new Date().toISOString(),
    };
  },
};
