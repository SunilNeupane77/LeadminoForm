"use client";

import { useState } from "react";
import Link from "next/link";

export default function RoiCalculator() {
  const [cloudSpend, setCloudSpend] = useState<number>(50000);
  const [teamSize, setTeamSize] = useState<number>(25);

  const estimatedSavings = Math.round(cloudSpend * 0.38 * 12);
  const hoursAutomated = Math.round(teamSize * 18 * 12);
  const throughputGain = "3.4x";

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-slate-800 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Enterprise Value Model
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Calculate Your Cloud & AI Optimization ROI
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Based on historical outcomes across 450+ enterprise Kubernetes and autonomous AI deployments.
          </p>
        </div>
        <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold whitespace-nowrap self-start md:self-auto">
          ✓ Verified Metric Benchmarks
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
        {/* Sliders Input */}
        <div className="lg:col-span-6 space-y-6">
          {/* Monthly Cloud Spend */}
          <div>
            <div className="flex justify-between text-sm font-semibold mb-2">
              <span className="text-slate-300">Monthly Cloud & Infrastructure Spend</span>
              <span className="text-cyan-400 font-mono text-base font-bold">
                ${cloudSpend.toLocaleString()} / mo
              </span>
            </div>
            <input
              type="range"
              min="10000"
              max="250000"
              step="5000"
              value={cloudSpend}
              onChange={(e) => setCloudSpend(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
              <span>$10k/mo</span>
              <span>$100k/mo</span>
              <span>$250k+/mo</span>
            </div>
          </div>

          {/* Engineering Team Size */}
          <div>
            <div className="flex justify-between text-sm font-semibold mb-2">
              <span className="text-slate-300">Engineering & Operations Headcount</span>
              <span className="text-cyan-400 font-mono text-base font-bold">
                {teamSize} Engineers
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="150"
              step="5"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
              <span>5 Members</span>
              <span>50 Members</span>
              <span>150+ Members</span>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-6 bg-slate-950/70 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Est. Annual Cloud Savings
              </p>
              <p className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono mt-1">
                ${estimatedSavings.toLocaleString()}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">Avg 38% waste reduction</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Dev Hours Recovered
              </p>
              <p className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono mt-1">
                {hoursAutomated.toLocaleString()} hrs
              </p>
              <p className="text-[11px] text-slate-400 mt-1">Via automated pipelines</p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-400">Peak Concurrency Headroom</p>
              <p className="text-lg font-bold text-white font-mono">{throughputGain} Scalability Multiplier</p>
            </div>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all whitespace-nowrap text-center"
            >
              Capture These Savings →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
