import { HomePage } from "../screens/Home/Home";
import { Routes, Route } from "react-router-dom";
import { DefaultDashboardPage } from "../screens/Dashboard/DefaultDashboard";

const RoutesComp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard/default" element={<DefaultDashboardPage />} />
    </Routes>
  );
};

export { RoutesComp };
