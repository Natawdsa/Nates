export interface LeaderboardEntry {
  rank: number;
  name: string;
  school: string;
  xp: number;
  league: string;
  weeklyChange: number;
  isCurrentUser?: boolean;
}

export const globalLeaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "Sarah K.", school: "Manchester Grammar", xp: 8450, league: "Platinum", weeklyChange: 0 },
  { rank: 2, name: "James W.", school: "Bolton School", xp: 7890, league: "Platinum", weeklyChange: 1 },
  { rank: 3, name: "Alex Chen", school: "Altrincham Grammar", xp: 4820, league: "Gold", weeklyChange: 3, isCurrentUser: true },
  { rank: 4, name: "Priya S.", school: "Cheadle Hulme School", xp: 4610, league: "Gold", weeklyChange: -1 },
  { rank: 5, name: "Tom H.", school: "King Edward VII", xp: 4250, league: "Gold", weeklyChange: 2 },
  { rank: 6, name: "Aisha M.", school: "Withington Girls", xp: 3870, league: "Gold", weeklyChange: -2 },
  { rank: 7, name: "Ethan B.", school: "Stockport Grammar", xp: 3440, league: "Silver", weeklyChange: 1 },
  { rank: 8, name: "Chloe R.", school: "Altrincham Grammar", xp: 3190, league: "Silver", weeklyChange: 0 },
  { rank: 9, name: "Marcus T.", school: "Sale Grammar", xp: 2860, league: "Silver", weeklyChange: -3 },
  { rank: 10, name: "Lily F.", school: "Loreto College", xp: 2540, league: "Silver", weeklyChange: 4 },
];

export const schoolLeaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "Alex Chen", school: "Altrincham Grammar", xp: 4820, league: "Gold", weeklyChange: 1, isCurrentUser: true },
  { rank: 2, name: "Chloe R.", school: "Altrincham Grammar", xp: 3190, league: "Silver", weeklyChange: 0 },
  { rank: 3, name: "Niamh O.", school: "Altrincham Grammar", xp: 2940, league: "Silver", weeklyChange: 2 },
  { rank: 4, name: "Ben C.", school: "Altrincham Grammar", xp: 2100, league: "Silver", weeklyChange: -1 },
  { rank: 5, name: "Freya J.", school: "Altrincham Grammar", xp: 1760, league: "Bronze", weeklyChange: 3 },
];

export const friendsLeaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "James W.", school: "Bolton School", xp: 7890, league: "Platinum", weeklyChange: 1 },
  { rank: 2, name: "Alex Chen", school: "Altrincham Grammar", xp: 4820, league: "Gold", weeklyChange: 1, isCurrentUser: true },
  { rank: 3, name: "Chloe R.", school: "Altrincham Grammar", xp: 3190, league: "Silver", weeklyChange: 0 },
];

export const leagueTiers = [
  { name: "Bronze", color: "#cd7f32", minXP: 0 },
  { name: "Silver", color: "#9ca3af", minXP: 1000 },
  { name: "Gold", color: "#f59e0b", minXP: 3000 },
  { name: "Platinum", color: "#a78bfa", minXP: 6000 },
  { name: "Scholar", color: "#22d3ee", minXP: 10000 },
  { name: "Legend", color: "#f97316", minXP: 20000 },
];
