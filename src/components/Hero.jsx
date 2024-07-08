import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';

const Hero = () => {
  const [pass, setPass] = useState('');
  const testResult = zxcvbn(pass);
  const crackTime = testResult.crack_times_display.offline_slow_hashing_1e4_per_second;

  const rating = () => {
    if(testResult.score){
      switch (testResult.score) {
        case 0:
          return 'Weak';
        case 1:
          return 'Medium';
        case 2:
          return 'Good';
        case 3:
          return 'Strong';
        case 4:
          return 'Very Strong';
        default:
    }
    
  }
  else{
    return ''
  }
}

  const crackStatus = () => {
    if(testResult.score){
      return crackTime
    }
    else{
      return ''
    }
  };

  const funcColor = () => {
    switch (testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
      default:
        return 'none';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="w-full max-w-4xl p-20  bg-muted rounded-xl border-2 border-indigo-400 shadow-indigo-xl">
          <h1 className="text-3xl font-bold text-center ">
            Check Your Password Strength
          </h1>
          <p className="mt-2 text-center ">
            Enter your password and let our tester analyze its
            strength.
          </p>
          <div className="mt-10">
            <label className="block mb-2 text-lg text-left">
              Evaluate your password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-4 border rounded-lg"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="flex justify-between mt-10 text-lg">
            <div>
              <p className="font-semibold text-gray-800">
                Your password strength:
              </p>
              <p style={{ color: funcColor() }}>{rating()}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                Estimated time to crack:
              </p>
              <p style={{ color: funcColor() }}>{crackStatus()}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
