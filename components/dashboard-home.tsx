"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  Brain,
  FileText,
  MessageSquare,
  User,
  TrendingUp,
  Target,
} from "lucide-react"

export function DashboardHome() {
  const stats = [
    { title: "Active Candidates", value: "47", icon: Users, color: "text-blue-400" },
    { title: "Pending Reviews", value: "12", icon: Clock, color: "text-yellow-400" },
    { title: "Approved Today", value: "8", icon: CheckCircle, color: "text-green-400" },
    { title: "Flagged Items", value: "3", icon: AlertTriangle, color: "text-red-400" },
  ]

  const recentActivity = [
    {
      candidate: "Sarah Chen",
      action: "Recommender Agent: Strong hire with 94% confidence",
      time: "2 min ago",
      status: "success",
      agent: "Recommender Agent",
    },
    {
      candidate: "Marcus Johnson",
      action: "Human-in-Loop: Escalated for manual review",
      time: "5 min ago",
      status: "warning",
      agent: "Human-in-Loop",
    },
    {
      candidate: "Elena Rodriguez",
      action: "Interviewer Agent: Technical interview scheduled",
      time: "12 min ago",
      status: "info",
      agent: "Interviewer Agent",
    },
    {
      candidate: "David Kim",
      action: "Intake Agent: Resume processed successfully",
      time: "18 min ago",
      status: "success",
      agent: "Intake Agent",
    },
  ]

  const agentStatus = [
    { name: "Intake Agent", icon: FileText, status: "active", tasks: 8, efficiency: 94 },
    { name: "Insight Agent", icon: Brain, status: "active", tasks: 3, efficiency: 87 },
    { name: "Interviewer Agent", icon: MessageSquare, status: "idle", tasks: 0, efficiency: 92 },
    { name: "Human-in-Loop", icon: User, status: "active", tasks: 5, efficiency: 98 },
    { name: "Learning Insights", icon: TrendingUp, status: "active", tasks: 2, efficiency: 89 },
    { name: "Recommender Agent", icon: Target, status: "active", tasks: 4, efficiency: 96 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "idle":
        return "bg-gray-500"
      case "error":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-100">Dashboard Overview</h1>
        <Badge
          variant="outline"
          className="border-talent-accent text-talent-accent bg-talent-accent/10 text-xs sm:text-sm w-fit"
        >
          All Systems Active
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
              <CardContent className="p-3 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-400 font-medium">{stat.title}</p>
                    <p className="text-lg sm:text-2xl font-bold text-gray-100 mt-1">{stat.value}</p>
                  </div>
                  <div className="p-2 sm:p-3 bg-gray-700 rounded-lg w-fit">
                    <Icon className={`w-4 h-4 sm:w-6 sm:h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Recent Activity */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="p-3 sm:p-6">
            <CardTitle className="text-gray-100 text-base sm:text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            <div className="space-y-3 sm:space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3 p-3 bg-gray-900 rounded-lg border border-gray-700"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
                      <p className="text-gray-100 font-medium text-sm sm:text-base">{activity.candidate}</p>
                      <Badge variant="outline" className="border-talent-accent text-talent-accent text-xs w-fit">
                        {activity.agent}
                      </Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{activity.action}</p>
                  </div>
                  <div className="flex flex-row sm:flex-col items-center sm:items-end space-x-2 sm:space-x-0 sm:space-y-1">
                    <span className="text-xs text-gray-500">{activity.time}</span>
                    <Badge
                      variant={activity.status === "success" ? "default" : "secondary"}
                      className={`text-xs ${
                        activity.status === "success"
                          ? "bg-green-600 text-white"
                          : activity.status === "warning"
                            ? "bg-yellow-600 text-white"
                            : "bg-blue-600 text-white"
                      }`}
                    >
                      {activity.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Agent Status */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="p-3 sm:p-6">
            <CardTitle className="text-gray-100 text-base sm:text-lg">Agent Status</CardTitle>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            <div className="space-y-3 sm:space-y-4">
              {agentStatus.map((agent) => {
                const Icon = agent.icon
                return (
                  <div
                    key={agent.name}
                    className="flex items-center space-x-3 p-3 bg-gray-900 rounded-lg border border-gray-700"
                  >
                    <div className="p-1.5 sm:p-2 bg-talent-accent/20 rounded flex-shrink-0">
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-talent-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 space-y-1 sm:space-y-0">
                        <h4 className="text-gray-100 font-medium text-xs sm:text-sm">{agent.name}</h4>
                        <div className="flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${getStatusColor(agent.status)}`} />
                          <span className="text-xs text-gray-400 capitalize">{agent.status}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                        <span className="text-xs text-gray-400">{agent.tasks} active tasks</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={agent.efficiency} className="w-12 sm:w-16 h-1 sm:h-1" />
                          <span className="text-xs text-gray-400">{agent.efficiency}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
