var hillClimbing = require("./hillClimbing");      // 引入爬山演算法類別
var solutionScheduling = require("../solution/solutionScheduling");    // 引入排課系統

// 執行爬山演算法 (從「解答(x,y,z)=(1,1,1)」開始尋找, 最多十萬代、失敗一千次就跳出。
// var s = new solutionScheduling(solutionScheduling.init())
// hc.run(s, 10, 1000);
hillClimbing(solutionScheduling.init(), 100000, 1000)
