import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Login.css"; // Make sure to import the CSS file here!

export function Login({ login, register }) {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-card">
        
        {/* Header Tabs */}
        <div className="auth-tabs">
          <button 
            type="button"
            className={`tab-btn ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
          <button 
            type="button"
            className={`tab-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {isLogin ? (
          /* --- LOGIN FORM --- */
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              login(userName, password);
            }}
            className="auth-form"
          >
            <h2 className="form-title">Welcome Back</h2>
            <div className="input-group">
              <input 
                type="text"
                placeholder="Username" 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="auth-input"
                required
              />
            </div>
            <div className="input-group">
              <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
                required
              />
            </div>
            <button type="submit" className="submit-btn login-btn">
              Submit
            </button>
            <p className="switch-text">
              Don't have an account?{' '}
              <button 
                type="button"
                onClick={() => setIsLogin(false)}
                className="link-btn"
              >
                Register
              </button>
            </p>
          </form>
        ) : (
          /* --- REGISTER FORM --- */
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              register(userName, password);
            }}
            className="auth-form"
          >
            <h2 className="form-title">Create Account</h2>
            <div className="input-group">
              <input 
                type="text"
                placeholder="Username" 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="auth-input"
                required
              />
            </div>
            <div className="input-group">
              <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
                required
              />
            </div>
            <button type="submit" className="submit-btn register-btn">
              Sign up
            </button>
            <p className="switch-text">
              Already have an account?{' '}
              <button 
                type="button"
                onClick={() => setIsLogin(true)}
                className="link-btn"
              >
                Sign In
              </button>
            </p>
          </form>
        )}

      </div>
    </div>
  );
}