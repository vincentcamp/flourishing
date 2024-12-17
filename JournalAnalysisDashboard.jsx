import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const JournalAnalysisDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

const JournalVisualization = () => {
  const data = [
    { date: '2024-09-07', score: 46 },
    { date: '2024-09-08', score: 47 },
    { date: '2024-09-09', score: 48 },
    { date: '2024-09-10', score: 47 },
    { date: '2024-09-11', score: 49 },
    { date: '2024-09-12', score: 50 },
    { date: '2024-09-13', score: 51 },
    { date: '2024-09-14', score: 52 },
    { date: '2024-09-15', score: 51 },
    { date: '2024-09-16', score: 50 },
    { date: '2024-09-17', score: 52 },
    { date: '2024-09-18', score: 53 },
    { date: '2024-09-19', score: 54 },
    { date: '2024-09-20', score: 55 },
    { date: '2024-09-21', score: 54 },
    { date: '2024-09-22', score: 56 },
    { date: '2024-09-23', score: 57 },
    { date: '2024-09-24', score: 58 },
    { date: '2024-09-25', score: 57 },
    { date: '2024-09-26', score: 59 },
    { date: '2024-09-27', score: 60 },
    { date: '2024-09-28', score: 61 },
    { date: '2024-09-29', score: 60 },
    { date: '2024-09-30', score: 62 },
    { date: '2024-10-01', score: 63 },
    { date: '2024-10-02', score: 64 },
    { date: '2024-10-03', score: 63 },
    { date: '2024-10-04', score: 65 },
    { date: '2024-10-05', score: 66 },
    { date: '2024-10-06', score: 65 },
    { date: '2024-10-07', score: 64 },
    { date: '2024-10-08', score: 66 },
    { date: '2024-10-09', score: 67 },
    { date: '2024-10-10', score: 68 },
    { date: '2024-10-11', score: 67 },
    { date: '2024-10-12', score: 69 },
    { date: '2024-10-13', score: 70 },
    { date: '2024-10-14', score: 71 },
    { date: '2024-10-15', score: 73 },
    { date: '2024-10-16', score: 75 },
    { date: '2024-10-17', score: 74 },
    { date: '2024-10-18', score: 76 },
    { date: '2024-10-19', score: 77 },
    { date: '2024-10-20', score: 76 },
    { date: '2024-10-21', score: 78 },
    { date: '2024-10-22', score: 79 },
    { date: '2024-10-23', score: 78 },
    { date: '2024-10-24', score: 77 },
    { date: '2024-10-25', score: 79 },
    { date: '2024-10-26', score: 80 },
    { date: '2024-10-27', score: 81 },
    { date: '2024-10-28', score: 80 },
    { date: '2024-10-29', score: 82 },
    { date: '2024-10-30', score: 81 },
    { date: '2024-10-31', score: 83 },
    { date: '2024-11-01', score: 82 },
    { date: '2024-11-02', score: 81 },
    { date: '2024-11-03', score: 83 },
    { date: '2024-11-04', score: 84 },
    { date: '2024-11-05', score: 83 },
    { date: '2024-11-06', score: 82 },
    { date: '2024-11-07', score: 84 },
    { date: '2024-11-08', score: 85 },
    { date: '2024-11-09', score: 84 },
    { date: '2024-11-10', score: 83 },
    { date: '2024-11-11', score: 85 },
    { date: '2024-11-12', score: 86 },
    { date: '2024-11-13', score: 85 },
    { date: '2024-11-14', score: 84 },
    { date: '2024-11-15', score: 86 },
    { date: '2024-11-16', score: 85 },
    { date: '2024-11-17', score: 84 },
    { date: '2024-11-18', score: 86 },
    { date: '2024-11-19', score: 87 },
    { date: '2024-11-20', score: 86 },
    { date: '2024-11-21', score: 85 },
    { date: '2024-11-22', score: 87 },
    { date: '2024-11-23', score: 86 },
    { date: '2024-11-24', score: 85 },
    { date: '2024-11-25', score: 84 },
    { date: '2024-11-26', score: 86 },
    { date: '2024-11-27', score: 85 },
    { date: '2024-11-28', score: 84 },
    { date: '2024-11-29', score: 86 },
    { date: '2024-11-30', score: 85 },
    { date: '2024-12-01', score: 84 },
    { date: '2024-12-02', score: 86 },
    { date: '2024-12-03', score: 85 },
    { date: '2024-12-04', score: 84 },
    { date: '2024-12-05', score: 86 },
    { date: '2024-12-06', score: 85 },
    { date: '2024-12-07', score: 84 },
    { date: '2024-12-08', score: 86 },
    { date: '2024-12-09', score: 85 },
    { date: '2024-12-10', score: 84 },
    { date: '2024-12-11', score: 86 },
    { date: '2024-12-12', score: 85 }
  ];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-medium">{new Date(label).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</p>
          <p className="text-blue-600">Score: {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Journal Entry Sentiment Analysis Scores</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 30,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="date"
                tickFormatter={(date) => new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis
                domain={[40, 90]}
                tickCount={6}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ r: 2 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-8 border-t pt-4">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 text-lg font-medium hover:text-gray-600 transition-colors"
          >
            Prompt {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          {isOpen && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="italic mb-4">Your task is to analyze the following journal entry based on its emotional tone, mindset, and overall sentiment. Provide a score out of 100 based on the following factors:</p>
              
              <ol className="space-y-4">
                <li>
                  <strong>Emotional Tone</strong>: Assess the underlying emotions expressed in the journal entry. Consider:
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Optimism vs. pessimism</li>
                    <li>• Hopefulness vs. hopelessness</li>
                    <li>• Frustration or anger vs. acceptance or calm</li>
                    <li>• Emotional volatility vs. emotional balance</li>
                  </ul>
                </li>
                <li>Provide a short summary of the dominant emotional tone, noting key phrases that illustrate it.</li>
                <li>
                  <strong>Self-Awareness and Reflection</strong>: Evaluate how deeply the journal writer reflects on their emotions, behaviors, and mindset. Look for:
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Awareness of internal struggles</li>
                    <li>• Recognition of emotional patterns or cognitive distortions</li>
                    <li>• Efforts to challenge, reframe, or improve one's outlook</li>
                  </ul>
                </li>
                <li>Describe how introspective the entry feels and whether the writer demonstrates meaningful growth or understanding of their emotional state.</li>
                <li>
                  <strong>Engagement with Challenges</strong>: Analyze how the writer approaches setbacks, difficulties, or self-doubt. Consider:
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Passive vs. proactive mindset</li>
                    <li>• Viewing challenges as failures vs. opportunities for growth</li>
                    <li>• Efforts to develop resilience and adapt their outlook</li>
                  </ul>
                </li>
                <li>Highlight any clear instances of reframing, problem-solving, or forward-looking optimism in response to challenges.</li>
                <li>
                  <strong>Consistency and Growth</strong>: Assess the degree of consistency in applying reflective or growth-oriented practices:
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Commitment to actionable habits (e.g., reframing, journaling, goal-setting)</li>
                    <li>• Efforts to track emotional or behavioral trends over time</li>
                    <li>• Evidence of progress, even if gradual, toward a more balanced or positive outlook</li>
                  </ul>
                </li>
                <li>Discuss how this entry reflects overall progress or stagnation relative to past entries (if applicable).</li>
                <li>
                  <strong>Overall Sentiment and Impact</strong>: Take a holistic view of the journal entry's overall impact:
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Does the entry feel hopeful, resigned, overwhelmed, or empowered?</li>
                    <li>• How effectively does the writer balance acknowledging struggles with seeking solutions?</li>
                    <li>• Are there signs of constructive emotional processing or personal growth?</li>
                  </ul>
                </li>
              </ol>

              <div className="mt-6">
                <h3 className="font-bold mb-2">Output Format</h3>
                <p>Provide your analysis under the following headers:</p>
                <ol className="ml-6 mt-2 space-y-1">
                  <li>1. <strong>Emotional Tone</strong>: Summary and key phrases.</li>
                  <li>2. <strong>Self-Awareness and Reflection</strong>: Depth of introspection and self-recognition.</li>
                  <li>3. <strong>Engagement with Challenges</strong>: Response to setbacks and proactive efforts.</li>
                  <li>4. <strong>Consistency and Growth</strong>: Signs of progress or stagnation.</li>
                  <li>5. <strong>Overall Sentiment and Impact</strong>: Holistic analysis of emotional tone and mindset.</li>
                </ol>
              </div>

              <div className="mt-6">
                <h3 className="font-bold mb-2">Example of a Consistent Scoring Framework:</h3>
                <ul className="space-y-2">
                  <li>• <strong>90-100</strong>: Reflects strong emotional balance, deep self-awareness, and consistent growth. Demonstrates proactive reframing and a hopeful tone.</li>
                  <li>• <strong>75-89</strong>: Indicates progress and meaningful reflection, but with occasional emotional volatility or self-doubt. Growth is visible but still developing.</li>
                  <li>• <strong>60-74</strong>: Demonstrates awareness of struggles but lacks proactive effort or emotional balance. Some progress, but reflection feels incomplete.</li>
                  <li>• <strong>40-59</strong>: Reflects significant emotional challenges, pessimism, or stagnation. Awareness exists, but little effort is shown toward growth.</li>
                  <li>• <strong>Below 40</strong>: Suggests overwhelming negativity, lack of reflection, or disengagement from challenges. Minimal signs of progress or emotional processing.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default JournalAnalysisDashboard;
