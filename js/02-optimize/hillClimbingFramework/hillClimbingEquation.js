var hillClimbing = require("./hillClimbing");      // 引入爬山演算法類別
var solutionEquations = require("../solution/solutionEquations");    // 引入線性聯立方程組解答類別

// 執行爬山演算法 (從「解答 x=(0,0)」開始尋找, 最多十萬代、失敗一千次就跳出。
hillClimbing(solutionEquations.zero(), 100000, 1000);