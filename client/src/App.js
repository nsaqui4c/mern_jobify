import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, Landing, Register, ProtectedRoute } from "./pages/index";
import {
  Profile,
  Stats,
  AllJobs,
  AddJob,
  SharedLayout,
} from "./pages/dashboard/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/" element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          {/*Nested paths. All the below path are now relative to '/'
            If we had /dash in parent then the paths will be /dash/stats etc... */}
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
