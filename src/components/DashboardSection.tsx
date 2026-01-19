import { Monitor, BarChart3, Users, TrendingUp, Zap, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced <span className="gradient-text">Analytics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time insights and comprehensive reporting to optimize your app growth strategy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Preview */}
          <div className="relative">
            {/* Main Dashboard Frame */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Monitor className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-semibold">ProgBid Analytics</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Dashboard Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Total Installs</span>
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-white text-2xl font-bold">2.4M</div>
                  <div className="text-green-400 text-sm">+32% this month</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Active Campaigns</span>
                    <Zap className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-white text-2xl font-bold">127</div>
                  <div className="text-blue-400 text-sm">Across 45 sources</div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-600 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-medium">Performance Overview</span>
                  <Eye className="w-4 h-4 text-slate-400" />
                </div>
                {/* Simplified Chart Visualization */}
                <div className="h-32 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-violet-500/20 rounded-lg relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-500/40 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-0 left-1/4 w-1/2 h-24 bg-gradient-to-t from-purple-500/40 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-0 right-0 w-1/3 h-20 bg-gradient-to-t from-violet-500/40 to-transparent rounded-lg"></div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-slate-400 text-xs">CPI</div>
                  <div className="text-white font-semibold">$1.24</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs">CVR</div>
                  <div className="text-white font-semibold">3.2%</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs">ROI</div>
                  <div className="text-white font-semibold">247%</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-lg animate-float shadow-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-secondary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">
              Everything you need in one <span className="gradient-text">powerful software.</span>
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: BarChart3,
                  title: "Real-time Performance Tracking",
                  description: "Monitor campaign performance, user acquisition costs, and ROI in real-time with interactive charts and graphs."
                },
                {
                  icon: Users,
                  title: "Advanced User Analytics",
                  description: "Deep insights into user behavior, retention rates, LTV, and cohort analysis to optimize your growth strategy."
                },
                {
                  icon: Monitor,
                  title: "Custom Reporting",
                  description: "Create custom reports tailored to your specific KPIs and share insights with your team."
                }
              ].map((feature, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;