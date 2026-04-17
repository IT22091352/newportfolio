import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const GithubActivity = () => {
  const [stats, setStats] = useState({
    totalContributions: 0,
    currentStreak: 0,
    longestStreak: 0,
    loading: true,
    error: null,
  });

  const username = 'IT22091352';
  const githubUrl = 'https://github.com/IT22091352';

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        // For real GitHub data, you need a Personal Access Token
        // Steps to get real stats:
        // 1. Go to https://github.com/settings/tokens/new
        // 2. Create token with "public_repo" scope
        // 3. Add to .env.local: REACT_APP_GITHUB_TOKEN=your_token_here
        // 4. Uncomment the Authorization header below
        
        const headers = {
          'Content-Type': 'application/json',
        };

        // Uncomment this if you have a GitHub token in .env.local
        // if (process.env.REACT_APP_GITHUB_TOKEN) {
        //   headers['Authorization'] = `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`;
        // }

        const query = `
          query {
            user(login: "${username}") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                }
              }
            }
          }
        `;

        const graphqlResponse = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers,
          body: JSON.stringify({ query }),
        });

        const graphqlData = await graphqlResponse.json();
        if (graphqlData.data?.user?.contributionsCollection) {
          const totalContributions = graphqlData.data.user.contributionsCollection.contributionCalendar.totalContributions;
          setStats(prev => ({
            ...prev,
            totalContributions,
            loading: false,
          }));
        } else {
          setStats(prev => ({
            ...prev,
            loading: false,
          }));
        }
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setStats(prev => ({
          ...prev,
          loading: false,
        }));
      }
    };

    fetchGithubStats();
  }, [username]);

  // Static data - these will be overridden by API data when available
  // Get real values from your GitHub profile or update with a GitHub token
  const demoStats = {
    totalContributions: 637, // Update with your real value or use GitHub token
    currentStreak: 1,        // From your GitHub profile
    longestStreak: 10,       // From your GitHub profile
  };

  const statCards = [
    {
      label: 'Total Contributions',
      value: stats.totalContributions || demoStats.totalContributions,
      icon: '📊',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      label: 'Current Streak',
      value: stats.currentStreak || demoStats.currentStreak,
      icon: '🔥',
      color: 'from-orange-500 to-red-500',
    },
    {
      label: 'Longest Streak',
      value: stats.longestStreak || demoStats.longestStreak,
      icon: '⭐',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="relative py-20 px-4 md:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              GitHub Activity
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            My open-source contributions and development activity
          </p>
        </motion.div>

        {/* Stat Cards Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {statCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-1 backdrop-blur-xl"
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20`}
              />

              {/* Card content */}
              <div className="relative rounded-2xl bg-slate-950/80 p-8 backdrop-blur-sm">
                {/* Icon */}
                <div className="mb-4 text-5xl">{card.icon}</div>

                {/* Value */}
                <div className="mb-2 text-5xl font-bold text-white">
                  {stats.loading ? (
                    <div className="h-12 w-20 animate-pulse rounded bg-slate-800" />
                  ) : (
                    card.value
                  )}
                </div>

                {/* Label */}
                <p className="text-sm text-slate-400">{card.label}</p>

                {/* Border glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.color} opacity-0 blur transition-opacity duration-300 group-hover:opacity-30`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contribution Calendar Section */}
        <motion.div
          className="mb-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-1 backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Glow effect background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/0 via-transparent to-blue-600/0 blur-2xl" />

          <div className="relative rounded-2xl bg-slate-950/80 p-8 backdrop-blur-sm">
            <h3 className="mb-8 text-2xl font-bold text-white">
              Contribution Calendar
            </h3>

            {/* GitHub Calendar */}
            <div className="flex justify-center">
              <div className="w-full overflow-x-auto">
                <div className="inline-block min-w-max">
                  <GitHubCalendar
                    username={username}
                    colorScheme="dark"
                    blockSize={13}
                    blockMargin={3}
                    fontSize={14}
                    style={{
                      color: '#e2e8f0',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Calendar Footer */}
            <div className="mt-8 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-center">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-sm bg-slate-700" />
                <span className="text-xs text-slate-400">No contributions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-sm bg-cyan-600" />
                <span className="text-xs text-slate-400">Low</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-sm bg-cyan-500" />
                <span className="text-xs text-slate-400">Medium</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-sm bg-cyan-400" />
                <span className="text-xs text-slate-400">High</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-sm bg-cyan-300" />
                <span className="text-xs text-slate-400">Very High</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GitHub Stats Badge (Alternative/Additional) */}
        <motion.div
          className="mb-16 flex flex-col items-center gap-8 md:flex-row md:justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Streak Badge */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block overflow-hidden rounded-xl border border-white/10 p-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 blur transition-opacity duration-300 group-hover:opacity-50" />
            <img
              src={`https://streak-stats.demolab.com/?user=${username}&theme=dark&hide_border=true&background=1a1a2e`}
              alt="GitHub Streak"
              className="relative block w-full rounded-xl"
              loading="lazy"
              decoding="async"
            />
          </a>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 rounded-full border border-white/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-cyan-400/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20"
          >
            {/* Icon */}
            <svg
              className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>

            <span>View My GitHub Profile</span>

            {/* Arrow icon */}
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>

            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 blur transition-opacity duration-300 group-hover:opacity-40" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubActivity;
