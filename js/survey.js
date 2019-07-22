
$(document).ready(function(){
   // readTextFile("file:///C:/ckcore.txt")
    GetData();
});
function GetData() {
    var data = "AETG#&Telcordia#&1994#&#&商业#&未知#&跨平台#&Web应用程序#&生成#&一次一条贪心#&2, 3, n#&3维#&支持#&支持#&#&#&#&#&#&#&不支持#&支持#&禁止元组#&未知#&#&#&负面测试#&#&#&http://aetgweb.argreenhouse.com/#&[1]The Automatic Efficient Tests Generator (AETG) System \r[2] The AETG System: An Approach to Testing Based on Combinatorial Design#&链接无法访问\n" +
        "TESTONA#&Assystem Germany#&2000#&2019#&商业#&Java#&Windows平台#&单机图形界面 (GUI)#&其他功能#&其他方法#&1, 2, 3, n#&3维#&支持#&不支持#&带权重的组合覆盖率排序; 基于预设覆盖率的约减, 可导出测试用例集#&#&辅助执行 (指定预期输出)#&导出 Shell, XML, Text, JUnit, SQL 等测试用例格式#&(可单独使用)组合覆盖率计算#&(可单独使用)参数取值出现故障的比例#&自定义建模语法#&支持#&逻辑表达式#&Yes#&Excel, txt, PDF, jpg, HTML#&多种输入输出格式，可与 AUTOSAR, Matlab / Simulink, IBM Rational DOORS, HP ALM, Atlassian Jira, Trello, Redmine 等配合使用#&追踪需求变化; 支持各类 specification-based test methds (ISO 29119); 提供 training#&总计31个版本，当前 Version 5.9.0 (2019)#&六个月以上#&https://www.assystem-germany.com/en/products/testona/#&Combinatorial Testing in an Industrial Environment-Analyzing the Applicability of a Tool#&\n" +
        "Tconfig#&[Williams]#&2000#&#&未知#&多种开发语言#&未知#&未知#&生成#&数学方法#&2#&2维#&不支持#&不支持#&#&#&#&#&#&#&不支持#&不支持#&#&#&#&#&#&#&#&#&Determination of Test Configurations for Pair-Wise Interaction Coverage#&\n" +
        "Pro-Test#&SigmaZone#&2002#&#&商业#&未知#&Windows平台#&单机图形界面 (GUI)#&生成#&未知#&2, n#&2维#&不支持#&支持#&#&#&#&#&#&#&自定义建模语法#&支持#&禁止元组#&Yes#&XML, HTML, Excel, CSV, txt#&#&#&#&#&http://sigmazone.com/protest/#&#&\n" +
        "AllPairs#&MetaCommunications#&2002#&2009#&开源或免费#&Python#&跨平台#&类库#&生成#&一次一条贪心#&1, 2#&2维#&不支持#&支持#&#&#&#&#&#&#&源码中声明模型#&支持#&嵌入函数#&No#&#&#&#&3个历史版本：最早1.0版本，2.0版本增加n维生成，2.0.1版本增加安装脚本，编辑示例#&六个月以上#&https://sourceforge.net/projects/allpairs/#&#&基于python2版本\n" +
        "Bender RBT#&BenderRBT Inc#&2002#&#&商业#&未知#&Windows平台#&单机图形界面 (GUI)#&生成+评估#&多种方法#&2#&2维#&不支持#&不支持#&#&#&#&自定义测试用例模板#&组合覆盖率可视化度量，可导出; 代码覆盖#&#&自定义建模语法#&支持#&逻辑表达式#&未知#&TOSCA#&导出为 RTF，用于 RM 工具或 word processor; 支持TestIF; 直接导出到 HP-Mercury’s test management tool 和 Tricentis’s TOSCA#&给用例添加标注#&多个版本，当前release 8.0 (历史版本数不详)#&#&http://www.benderrbt.com/bendersoftware.htm#&#&Cause-Effect Graphing 和 Quick Design (CT) 两种模式\n" +
        "CTS#&IBM#&2002#&#&未知#&C/C++#&跨平台#&类库#&生成+评估#&数学方法#&[1-4]#&4维#&不支持#&不支持#&#&#&#&#&组合覆盖率计算#&#&不支持#&支持#&禁止元组#&未知#&txt, ATS (abstract test suite), CSV#&#&#&#&#&#&#&\n" +
        "AllPairs#&Satisfice#&2002#&#&开源或免费#&其他#&跨平台#&单机命令行 (CLI)#&生成+评估#&一次一条贪心#&2#&2维#&不支持#&不支持#&#&#&#&#&标出每条测试用例覆盖的新组合数以及每个组合出现在哪些用例中#&#&自定义建模语法#&不支持#&#&#&#&#&标出无关位置#&\"4个历史版本 (时间不详)v1.01编译优化增加“don't care”位置标注; v1.1增加测试用例和组合对应信息; v1.2修正bug和使用说明; v1.2.1修正bug\"#&#&http://www.satisfice.com/tools.shtml#&#&提出时间是最新版本时间\n" +
        "TestCover#&Testcover.com#&2003#&#&商业#&其他#&跨平台#&多种形式#&生成+评估#&数学方法#&2#&2维#&不支持#&不支持#&#&#&#&#&覆盖元组数计算#&#&自定义建模语法#&支持#&多种方式#&Yes#&#&#&提供 WSDL interface; 提供 tutorial#&#&#&https://testcover.com/index.php#&Embedded functions for test design automation#&需要注册, 2017年加入嵌入函数表示约束\n" +
        "Jenny#&[Jenkins]#&2003#&2005#&开源或免费#&C/C++#&跨平台#&单机命令行 (CLI)#&生成#&一次一条贪心#&[1-32]#&32维#&不支持#&支持#&#&#&#&#&#&#&不支持#&支持#&禁止元组#&Yes#&#&#&#&4次更新历史，截止到 2005 年#&六个月以上#&http://burtleburtle.net/bob/math/jenny.html#&#&参数个数最多52个\n" +
        "Test Vector Generator#&[Arshem/Schroeder]#&2004#&#&开源或免费#&Java#&跨平台#&单机图形界面 (GUI)#&生成#&未知#&[1-10], n#&10维#&支持#&不支持#&#&#&#&#&#&#&不支持#&不支持#&#&#&txt#&#&随机测试; 在输入输出文件中自定义comment#&#&#&https://sourceforge.net/projects/tvg/#&#&\n" +
        "Intelligent Test Case Handler#&IBM#&2005#&#&未知#&Java#&未知#&插件#&生成#&未知#&未知#&未知#&不支持#&不支持#&#&#&#&#&#&#&不支持#&不支持#&#&#&#&#&集成其他算法#&#&#&http://freshmeat.sourceforge.net/projects/ibmintelligenttestcasehandler#&#&\n" +
        "SpecExporer#&Microsoft#&2005#&2010#&开源或免费#&C##&Windows平台#&插件#&生成+执行#&未知#&[2-n]#&n维#&支持#&支持#&#&支持执行model base testing #&#&#&#&#&源码中声明模型#&支持#&禁止元组#&未知#&#&#&负面测试; 声明测试目标#&多个版本，最新spec explorer 2010, 版本数目不详#&#&https://docs.microsoft.com/en-us/previous-versions/visualstudio/spec-explorer/ee620448%28v%3dspecexplorer.10%29#&Model-Based Testing of Object-Oriented Reactive Systems with Spec Explorer#&该工具主要功能是model based testing, 实现CT作为modeling techniques之一\n" +
        "ATD#&AtYourSide Consulting#&2006#&#&商业#&未知#&Windows平台#&单机图形界面 (GUI)#&生成#&基于搜索的方法#&[1-3], n#&3维#&不支持#&不支持#&#&#&#&为自动化测试工具生成测试脚本#&#&#&不支持#&支持#&未知#&未知#&#&可生成测试脚本和其它主流自动化测试工具配合使用(Mercury’s WinRunner and QuickTest, Compuware’s TestPartner or IBM Rational Robot), 与TestDirector、QualityMate集成#&#&#&#&http://atyourside.pt/products/atd/atd_description.html#&#&\n" +
        "Jwrap#&[Ramesh Ramani]#&2006#&2009#&开源或免费#&VB#&Windows平台#&单机图形界面 (GUI)#&生成#&集成其他工具#&[1-5]#&5维#&不支持#&不支持#&#&#&#&#&#&#&自定义建模语法#&支持#&禁止元组#&Yes#&Excel#&#&#&7条更新记录#&六个月以上#&https://sourceforge.net/projects/jwrap/#&#&\n" +
        "PICT#&Microsoft#&2006#&2018#&开源或免费#&C/C++#&跨平台#&多种形式#&生成#&一次一条贪心#&[1-n]#&n维#&支持#&支持#&#&#&辅助执行 (指定预期输出)#&#&#&#&自定义建模语法#&支持#&逻辑表达式#&Yes#&#&#&Aliasing (一个参数值的多个名字); 负面测试; 设置参数值权重; 重用已有测试用例#&github上59条commit (github上最早commit时间是2015年)#&一个月以内#&https://github.com/Microsoft/pict#&Pairwise Testing in Real World#&通过子模型实现可变力度\n" +
        "OATSGen#&Motorola Software Group#&2007#&#&未知#&未知#&跨平台#&Web应用程序#&生成#&基于参数顺序的方法#&2#&2维#&不支持#&不支持#&#&#&#&#&#&#&自定义建模语法#&支持#&禁止元组#&未知#&#&#&#&#&#&#&Combinatorial Testing: Learnings from our Experience#&\n" +
        "ACTS#&NIST#&2007#&2016#&开源或免费#&Java#&跨平台#&多种形式#&生成+评估#&基于参数顺序的方法#&[1-6]#&6维#&支持#&支持#&#&#&#&#&(可单独使用) 组合覆盖率可视化度量; 检测覆盖表在1-6维上覆盖情况. 导入本工具生成的测试用例文件#&#&自定义建模语法#&支持#&逻辑表达式#&Yes#&Excel, CSV, NIST#&#&重用已有测试用例; 负面测试; 标出无关位置#&最早版本可追溯到 1998 年的IPO (PairTest) 2-way 测试工具，已知有13个版本，已知最早版本发布于2012年，最新版本3.0#&三到六个月#&https://csrc.nist.gov/projects/automated-combinatorial-testing-for-software#&[1]IPOG_A General Strategy for T-Way Software Testing\r[2]ACTS: A combinatorial test generation tool;[3]Combinatorial Testing of ACTS_A Case Study#&\n" +
        "JTst#&[Zamli/Isa/Klaib/Azizan]#&2007#&#&未知#&Java#&跨平台#&未知#&生成#&一次一条贪心#&未知#&未知#&不支持#&支持#&#&#&#&生成接口调用代码#&#&#&不支持#&不支持#&#&#&#&#&#&#&#&#&Designing a combinatorial Java unit testing tool#&\n" +
        "EXACT#&[Yan/Zhang]#&2008#&#&未知#&C/C++#&未知#&未知#&生成#&其他方法#&未知#&未知#&不支持#&不支持#&#&#&#&#&#&#&不支持#&不支持#&#&#&#&#&#&#&#&http://lcs.ios.ac.cn/~yanjun/research/EXACT.html#&A backtracking search tool for constructing combinatorial test suites#&邮件申请，无回复\n" +
        "PictMaster#&IWATSU System & Software#&2008#&2017#&开源或免费#&VB#&Windows平台#&单机图形界面 (GUI)#&生成+评估#&集成其他工具#&[1-50]#&50维#&支持#&支持#&#&#&辅助执行 (指定预期输出)#&#&覆盖率评估#&#&不支持#&支持#&逻辑表达式#&Yes#&Excel#&#&Aliasing (一个参数值的多个名字); 负面测试; 设置参数值权重;  重用已有测试用例; 生成满足指定覆盖率的覆盖表; 多次调用PICT选择最小覆盖表#&总计29个版本, 最新5.7.3E (2013); 还有日文版，最新2017#&二到三个月#&https://osdn.net/projects/pictmaster/#&#&基于PICT工具, 最多50个参数和50条约束\n" +
        "CASA#&[Garvin/Cohen/Dwyer]#&2009#&#&开源或免费#&C/C++#&Linux平台#&单机命令行 (CLI)#&生成#&基于搜索的方法#&[1-n]#&n维#&不支持#&不支持#&#&#&#&#&#&#&自定义建模语法#&支持#&布尔表达式#&No#&txt#&#&#&#&#&https://cse.unl.edu/~citportal/#&[1]An Improved Meta-Heuristic Search for Constrained Interaction Testing\r[2]Evaluating improvements to a meta-heuristic search for constrained interaction testing#&\n" +
        "Hexawise#&Hexawise#&2009#&2019#&商业#&未知#&跨平台#&Web应用程序#&生成+评估#&未知#&[2-6]#&6维#&支持#&支持#&#&#&辅助执行 (指定预期输出)#&自定义测试用例模板#&组合覆盖率可视化度量#&#&自定义建模语法#&支持#&禁止元组#&未知#&Excel, CSV, OPML#&HP Quality Center#&声明测试目标; 为客户定制工具; 技术支持与培训#&总计有403条更新记录，已知最早版本发布于2010年#&一个月以内#&https://hexawise.com/#&#&如果持有公司Email，可以申请试用\n" +
        "ATIG#&[McGill/Stirewalt/Dillon]#&2009#&#&未知#&未知#&未知#&未知#&生成#&集成其他工具#&未知#&未知#&不支持#&不支持#&#&#&#&#&#&#&不支持#&支持#&禁止元组#&未知#&#&#&#&#&#&#&Automated test input generation for software that consumes ORM models#&\n" +
        "Nunit#&[Poole/Prouse/Busoli/Colvin]#&2009#&2019#&开源或免费#&C##&Windows平台#&类库#&生成+执行#&基于搜索的方法#&2, n#&2维#&不支持#&不支持#&#&单元测试#&#&#&#&#&源码中声明模型#&不支持#&#&#&#&#&#&github上5113条commit记录#&一个月以内#&https://nunit.org/#&#&单元测试框架\n" +
        "pairwise#&[Wilk]#&2009#&2019#&开源或免费#&Ruby#&跨平台#&单机命令行 (CLI)#&生成#&基于参数顺序的方法#&2#&2维#&不支持#&不支持#&#&#&#&#&#&#&自定义建模语法#&不支持#&#&#&#&#&标出无关位置; 生成CSV格式测试用例#&github上163条commit记录#&一个月以内#&https://github.com/josephwilk/pairwise#&#&\n" +
        "VPTAG#&[Robert Vanderwall]#&2010#&#&开源或免费#&Java#&跨平台#&单机图形界面 (GUI)#&生成#&基于参数顺序的方法#&1, 2, n#&2维#&不支持#&不支持#&#&#&#&#&#&#&自定义建模语法#&支持#&布尔表达式#&No#&#&#&#&#&#&https://sourceforge.net/projects/vptag/#&#&\n" +
        "PWiseGen#&[Flores/Cheon]#&2010#&#&开源或免费#&Java#&跨平台#&类库#&生成#&基于搜索的方法#&2#&2维#&不支持#&不支持#&#&#&#&#&#&#&自定义建模语法#&不支持#&#&#&txt#&#&支持配置遗传算法参数#&#&#&https://code.google.com/archive/p/pwisegen/#&PWiseGen: Generating Test Cases for Pairwise Testing Using Genetic Algorithms#&\n" +
        "TestTwo#&[Eads]#&2010#&#&开源或免费 #&Ruby#&跨平台#&单机命令行 (CLI)#&生成#&一次一条贪心#&2#&2维#&不支持#&不支持#&#&#&#&#&#&#&复用已有语法#&不支持#&#&#&CSV, txt#&#&#&(无时间信息) 4个历史版本，最新v0.031由 Satisfice 公司 AllPairs 工具演化而来#&#&https://sourceforge.net/projects/testtwo/#&#&提出时间是v0.03版本推出时间\n" +
        "tcases#&[Kimbrough]#&2010#&2019#&开源或免费#&Java#&跨平台#&多种形式#&生成#&未知#&[1-n]#&n维#&支持#&支持#&#&#&#&把覆盖表转换成Junit/TestNG测试用例#&#&#&自定义建模语法#&支持#&逻辑表达式#&No#&XML, HTML, Junit/TestNG tests, XSLT#&#&负面测试; 重用已有测试用例; 多次运行找出最小用例集; 减少特点组合出现次数#&github上628条commit记录#&一个月以内#&https://github.com/Cornutum/tcases#&#&\n" +
        "NTestCaseBuilder#&[Murphy]#&2010#&2014#&开源或免费#&其他#&Windows平台#&类库#&生成+执行#&未知#&[2-n]#&n维#&不支持#&不支持#&#&单元测试#&#&#&#&#&源码中声明模型#&不支持#&#&#&#&#&#&github上606条commit记录#&一个月以内#&https://www.nuget.org/packages/NTestCaseBuilder/#&#&\n" +
        "MoSo-PoLiTe#&[Oster/Zorcic/Markert/Lochau]#&2011#&#&商业#&未知#&未知#&插件#&生成#&基于贪心的约束可满足问题#&2, 3, 4#&4维#&不支持#&支持#&#&#&#&#&#&#&不支持#&支持#&逻辑表达式#&未知#&#&基于 SPL 的 pure:variant (variant management) 和 ATG 工具进行测试数据生成#&#&#&#&#&[1] MoSo-PoLiTe: tool support for pairwise and model-based software product line testing\r[2] Automated Incremental Pairwise Testing of Software Product Lines#&\n" +
        "CPUT#&[Sampath/Bryce/Jain/Manchester]#&2011#&#&未知#&Java#&跨平台#&单机图形界面 (GUI)#&优化#&#&#&#&#&#&3种排序准则：HTTP请求数目由多到少排序; 用例涉及参数个数由多到少排序; 2维元组覆盖排序。1种约减准则：基于2维组合约减#&#&#&#&#&#&#&#&#&#&XML#&#&#&#&#&#&A Tool for Combinatorial-based Prioritization and Reduction of User Session Based Test Suites#&\n" +
        "FOCUS#&IBM#&2011#&#&商业#&Java#&跨平台#&单机图形界面 (GUI)#&其他功能#&其他方法#&未知#&未知#&支持#&支持#&在不影响原覆盖表覆盖率的前提下约减覆盖表#&#&辅助执行 (指定预期输出)#&#&提供matrix, graph based, tree based三种可视化, 计算组合覆盖率#&#&不支持#&支持#&多种方式#&未知#&#&#&负面测试; 设置参数值权重; 协助建模, 验证模型正确性, 形式化描述模型迭代, 组合测试模型可视化; 重用已有测试用例#&#&#&https://researcher.watson.ibm.com/researcher/view_group.php?id=1871#&[1]Using Binary Decision Diagrams for Combinatorial Test Design\r[2]Visualization of Combinatorial Models and Test Plans\r[3]System Level Combinatorial Testing in Practice–The Concurrent Maintenance Case Study\r[4]Combinatorial Testing with Order Requirements#&\n" +
        "SPLCATool#&[Johansen]#&2011#&2012#&开源或免费#&Java#&跨平台#&单机命令行 (CLI)#&生成+执行+评估#&一次一条贪心#&1, 2, 3#&3维#&不支持#&支持#&#&自动化测试执行 (Eclipse-Based Product Lines)#&#&#&(可单独使用)计算组合覆盖率, weight覆盖率. 导入本工具生成的测试用例文件#&#&自定义建模语法#&支持#&布尔表达式#&Yes#&CSV#&自动化测试链接Hudson和Jenkins等持续集成工具#&组合测试模型检查; 验证覆盖表正确性; 集成IPOG、CASA和MoSoPoLiTe生成方法; 重用已有测试用例; 带权重的SPL (某些常用配置); 提高weight覆盖率的建议#&5个版本#&三到六个月#&https://github.com/SINTEF-9012/SPLCATool#&An Algorithm for Generating t-wise Covering Arrays from Large Feature Models#&该工具演化成pairwiser工具\n" +
        "Jcombinatorial#&[Reeder]#&2011#&2017#&开源或免费#&Java#&跨平台#&类库#&生成+执行#&其他方法#&1, 2, n#&2维#&不支持#&不支持#&#&单元测试#&#&#&#&#&不支持#&不支持#&#&#&#&Junit#&#&github上32次commit#&二到三个月#&https://github.com/jeremyreeder/jcombinatorial#&#&\n" +
        "CTWeb#&Universidad de castillala Mancha#&2011#&#&开源或免费#&未知#&跨平台#&Web应用程序#&生成#&多种方法#&1, 2, n#&2维#&不支持#&支持#&#&#&辅助执行 (指定预期输出)#&自定义测试用例模板#&#&#&自定义建模语法#&支持#&禁止元组#&Yes#&CSV#&#&随机测试; 设置组合权重#&#&#&http://alarcosj.esi.uclm.es/CTWeb#&#&链接无法访问\n" +
        "Ttuples#&[Calvagna/Gargantini]#&2012#&#&未知#&未知#&未知#&未知#&生成#&基于参数顺序的方法#&[2-n]#&n维#&不支持#&不支持#&#&#&#&#&#&#&不支持#&支持#&禁止元组#&未知#&#&#&#&#&#&http://www.diit.unict.it/acalva#&T-wise combinatorial interaction test suites construction based on coverage inheritance#&链接无法访问\n" +
        "CitLab#&[Calvagna/Gargantini/Vavassori]#&2012#&2018#&开源或免费#&Java#&跨平台#&插件#&其他功能#&多种方法#&[2-n]#&n维#&不支持#&支持#&约减冗余测试用例 (冗余测试用例指没有组合仅被该用例覆盖)#&#&#&#&检查所有元组是否被覆盖#&#&自定义建模语法#&支持#&逻辑表达式#&Yes#&Excel, CSV#&#&声明测试目标; 检测模型#&sourceforge上2316条commit#&一个月以内#&https://sourceforge.net/projects/citlab/#&[1]Combinatorial Interaction Testing with CITLAB\r[2]CITLAB: A Laboratory for Combinatorial Interaction Testing#&XTEXT来描述模型\n" +
        "PLEDGE#&[Henard/Papadakis/Perrouin]#&2012#&2016#&开源或免费#&Java#&跨平台#&多种形式#&其他功能#&#&#&#&#&#&(可单独使用)基于测试用例相似度排序 (贪心/近似最优), 可导入和导出测试用例集#&#&#&#&(可单独使用)2维覆盖率计算#&#&SPLOT, DIMACS格式组合测试模型#&Y#&Boolean formula#&#&txt#&#&#&github上17条commit记录#&三到六个月#&https://research.henard.net/SPL/PLEDGE/#&PLEDGE: A Product Line Editor and Test Generation Tool#&在指定时间内生成指定条数的覆盖表, 最大化覆盖率\n" +
        "ecFeed#&ecFeed AS#&2013#&2018#&开源或免费#&Java#&跨平台#&多种形式#&生成+执行+评估#&其他方法#&[1-n]#&n维#&不支持#&不支持#&#&为Java编写的待测软件、web应用和安卓应用执行测试用例#&辅助执行 (指定预期输出)#&自定义测试用例模板#&(可单独使用) 组合覆盖率评估#&#&不支持#&支持#&逻辑表达式#&No#&CSV, XML, Cherkin#&Junit, selenium#&随机测试; 自适应随机测试; 生成指定覆盖率的覆盖表#&github上3615条commit记录#&一个月以内#&http://ecfeed.com/  a github fork https://github.com/testify-no/ecFeed-public#&#&\n" +
        "PWTool#&[Sungkur/Muhamodsaroar]#&2013#&#&未知#&未知#&跨平台#&Web应用程序#&生成#&基于参数顺序的方法#&2#&2维#&不支持#&不支持#&#&#&#&#&#&#&不支持#&支持#&未知#&未知#&#&#&#&#&#&#&PWTool: A novel automated tool for pairwise testing#&\n" +
        "pairwise#&[Khaggard]#&2013#&2014#&开源或免费#&Java#&跨平台#&类库#&生成#&一次一条贪心#&2#&2维#&不支持#&不支持#&#&#&#&#&#&#&不支持#&不支持#&#&#&#&#&#&github上16条commit记录#&一到两个月#&https://github.com/RetailMeNot/pairwise#&#&\n" +
        "Cascade#&[Zhao/Zhang/Yan/Zhang]#&2013#&#&未知#&未知#&未知#&未知#&生成#&基于贪心的约束可满足问题#&未知#&未知#&支持#&支持#&#&#&#&#&#&#&自定义建模语法#&支持#&逻辑表达式#&未知#&#&#&#&#&#&#&Cascade: A Test Generation Tool for Combinatorial Testing#&\n" +
        "CCM#&[Dominguez/Kuhn/Kacker/Lei]#&2013#&#&开源或免费#&Java#&跨平台#&单机图形界面 (GUI)#&评估#&#&#&#&#&#&#&#&#&#&2-6维组合覆盖率可视化评估#&#&ACTS工具生成的测试用例文件#&Y#&Logical formula#&#&#&#&找出未覆盖组合和非法组合#&#&#&#&CCM: A tool for measuring combinatorial coverage of system state space#&定义了多种覆盖度量指标\n" +
        "JCUnit#&[Ukai]#&2013#&2019#&开源或免费#&Java#&跨平台#&类库#&生成+执行+评估#&多种方法#&[1-n]#&n维#&不支持#&支持#&#&单元测试#&辅助执行 (指定预期输出, 自定义测试用例描述)#&#&支持计算有限状态机的状态覆盖、路径覆盖和状态转换覆盖，以及组合覆盖情况 (0.6版本)#&#&源码中声明模型#&支持#&嵌入函数#&No#&#&Junit#&负面测试#&github上1572条commit记录 (3个分支)#&一个月以内#&https://github.com/dakusui/jcunit#&Test Design as Code: JCUnit#&\n" +
        "Eris#&[Garn/Simos]#&2014#&#&未知#&C/C++#&未知#&未知#&执行#&#&#&#&#&#&#&为Linux系统调用接口执行测试#&#&#&#&#&#&#&#&#&#&#&#&#&#&#&Eris: A Tool for Combinatorial Testing of the Linux System Call Interface#&测试结果判断 (内核是否崩溃), 借助ACTS工具生成用例\n" +
        "ct_common#&[Zhang]#&2014#&2016#&开源或免费#&C/C++#&跨平台#&类库#&生成#&未知#&[1-n]#&n维#&支持#&支持#&#&#&#&#&#&#&复用已有语法#&支持#&逻辑表达式#&未知#&#&#&声明测试目标; 重用已有测试用例; 支持屏蔽约束#&gihub上110条commit记录#&一个月以内#&https://github.com/xxyzzzq/ct_common#&#&用于Cascade工具\n" +
        "Xunit.Combinatorial#&[Arnott]#&2015#&2018#&开源或免费#&C##&Windows平台#&类库#&生成+执行#&一次一条贪心#&2#&2维#&不支持#&不支持#&#&单元测试#&#&#&#&#&源码中声明模型#&不支持#&#&#&#&xunit#&#&github上67条commit记录#&一个月以内#&https://github.com/AArnott/Xunit.Combinatorial#&#&\n" +
        "BEN#&[Ghandehari/Chandrasekaran/Lei/Kacker/Kuhn]#&2015#&#&开源或免费#&Java#&跨平台#&多种形式#&故障定位#&#&#&#&#&#&#&#&#&#&#&迭代的过程, 每次迭代执行部分测试用例, 进而更新可疑组合; 可定位到代码#&组合测试模型, 源码#&#&#&#&#&#&#&#&#&http://barbie.uta.edu/~laleh/BEN.html#&[1]Evaluating the Effectiveness of BEN in Localizing Different Types of Software Fault\r[2]BEN: A Combinatorial Testing-Based Fault Localization Tool#&图形界面版本需要待测软件源码, 命令行版本不需要\n" +
        "pairwiser#&Inductive#&2015#&#&商业#&未知#&跨平台#&Web应用程序#&生成+评估#&未知#&1, 2, 3#&3维#&支持#&支持#&#&#&#&自定义测试用例模板#&组合覆盖率可视化展示#&#&不支持#&支持#&逻辑表达式#&未知#&Excel, JIRA#&#&#&#&#&https://inductive.no/pairwiser/#&#&免费试用版于2018.01.15关闭\n" +
        "covering-arrays#&[Badahdah]#&2015#&2015#&开源或免费#&C/C++#&跨平台#&单机命令行 (CLI)#&评估#&#&#&#&#&#&#&#&#&#&2维覆盖率验证#&#&#&#&#&#&#&#&标出无关位置#&github上8条commit记录#&一到两个月#&https://github.com/djblue/covering-arrays#&#&可并行; 参数取值个数必须统一\n" +
        "generateMCA#&[Wang]#&2015#&2017#&开源或免费#&C/C++#&Windows平台#&类库#&生成#&基于搜索的方法#&[2-n]#&n维#&不支持#&不支持#&#&#&#&#&#&#&不支持#&不支持#&#&#&#&#&#&github上5条commit记录#&六个月以上#&https://github.com/laoyaolandq/generateMCA#&#&\n" +
        "CPTG#&[Nakornburi/Suwannasart]#&2016#&#&未知#&其他#&未知#&未知#&生成#&基于参数顺序的方法#&2#&2维#&不支持#&不支持#&#&#&#&#&#&#&自定义建模语法#&支持#&多种方式#&未知#&#&#&#&#&#&#&A tool for constrained pairwise test case generation using statistical user profile based prioritization#&使用replace方法处理约束\n" +
        "CCMCL#&NIST#&2016#&2017#&开源或免费#&Java#&跨平台#&单机命令行 (CLI)#&评估#&#&#&#&#&#&#&#&#&#&2-6维组合覆盖率可视化评估#&#&ACTS工具生成的测试用例文件#&#&Logical formula#&#&#&#&找出未覆盖组合和非法组合; 递增式计算覆盖率 (不断有新测试用例加入)#&github上98条commit记录#&一个月以内#&https://github.com/usnistgov/combinatorial-testing-tools#&#&CCM工具的命令行版本\n" +
        "KTK#&[Tsuchiya]#&2016#&2018#&开源或免费#&C/C++#&Windows平台#&单机命令行 (CLI)#&生成#&数学方法#&2#&2维#&不支持#&不支持#&#&#&#&#&#&#&不支持#&不支持#&#&#&#&#&标出无关位置#&源码注释中提到v0.4(2016) github上有6条commit记录#&三到六个月#&https://github.com/tatsuhirotsuchiya/KTK#&A new method for constructing pair-wise covering designs for software testing#&\n" +
        "medici#&[Corna]#&2017#&2017#&开源或免费#&C/C++#&跨平台#&单机命令行 (CLI)#&生成#&一次一条贪心#&未知#&未知#&不支持#&不支持#&#&#&#&#&#&#&复用已有语法#&支持#&布尔表达式#&未知#&#&#&验证模型#&github上24条commit记录#&一个月以内#&https://github.com/garganti/medici#&Efficient Combinatorial Test Generation based on Multivalued Decision Diagrams#&上传到CitLab工具中，可在CitLab中使用\n" +
        "Covering-Array-Generator#&[Dott]#&2017#&2018#&开源或免费#&Java#&跨平台#&单机命令行 (CLI)#&生成#&其他方法#&2#&2维#&不支持#&不支持#&#&#&#&#&#&#&不支持#&不支持#&#&#&#&#&#&github上16条commit记录#&一到两个月#&https://github.com/jkd28/Covering-Array-Generator#&#&所有参数均是2值\n" +
        "CHiP#&Sabanci University Software Engineering Group#&2017#&2018#&开源或免费#&未知#&未知#&单机命令行 (CLI)#&生成#&基于搜索的方法#&2, 3, 4#&4维#&不支持#&不支持#&#&#&#&#&#&#&自定义建模语法#&支持#&禁止元组#&未知#&#&#&#&github上15条commit记录#&一到两个月#&https://github.com/susoftgroup/CHiP#&#&并行\n" +
        "CTWedge#&[Gargantini/Radavelli]#&2018#&2019#&开源或免费#&Java#&跨平台#&多种形式#&生成#&集成其他工具#&[1-n]#&n维#&不支持#&不支持#&#&#&#&#&#&#&复用已有语法#&支持#&逻辑表达式#&No#&CSV, Excel#&#&协助建模, 检测模型正确性、语法和格式规范#&github上121条commit记录#&一个月以内#&https://github.com/fmselab/ctwedge#&Migrating combinatorial interaction test modeling and generation to the web#&\n" +
        "cametrics#&[Leithner/Kleine/Simos]#&2018#&#&开源或免费#&其他#&跨平台#&多种形式#&评估#&#&#&#&#&#&#&#&#&#&[1-n]维组合覆盖率可视化评估, 每条测试用例新覆盖组合数, 基于距离的评估#&#&导入CSV和ACTS生成的格式 (NIST)#&Y#&Logical formula#&#&#&#&#&#&#&https://matris.sba-research.org/tools/cametrics#&CAmetrics: A tool for advanced combinatorial analysis and measurement of test sets#&\n" +
        "CSCM#&[Ratliff]#&2018#&2019#&开源或免费#&其他#&跨平台#&单机命令行 (CLI)#&评估#&#&#&#&#&#&#&#&#&#&[1-n]维覆盖率计算#&#&文本格式测试用例#&#&#&#&#&#&找出未覆盖组合#&github上21条commit记录#&一到两个月#&https://github.com/zachratliff22/CSCM-Tool#&#&可并行，测试序列的覆盖\n" +
        "CAGen#&SBA Research#&2018#&#&开源或免费#&其他#&跨平台#&多种形式#&生成#&基于参数顺序的方法#&[1-n]#&n维#&不支持#&不支持#&#&#&#&#&#&#&复用已有语法#&支持#&布尔表达式#&No#&CVS#&#&设置组合冗余度 (每个组合至少覆盖几次); 把模型转化成ACTS, PICT, CAGen命令行工具的模型; 把测试用例转换成matlab, python格式; 标出无关位置#&#&#&https://matris.sba-research.org/tools/cagen/#/workspaces#&#&\n" +
        "Covering_Arrays#&[Haskins]#&2018#&2018#&开源或免费#&Python#&跨平台#&单机命令行 (CLI)#&生成#&多种方法#&[1-n]#&n维#&不支持#&不支持#&#&#&#&#&#&#&不支持#&不支持#&#&#&#&#&#&github上33条commit记录#&一个月以内#&https://github.com/tijohask/Covering_Arrays#&#&\n" +
        "covering-arrays-from-msequences#&[Tzanakis]#&2018#&2018#&开源或免费#&Python#&跨平台#&单机命令行 (CLI)#&生成#&数学方法#&未知#&未知#&不支持#&不支持#&#&#&#&#&#&#&不支持#&不支持#&#&#&#&#&#&github上15条commit记录#&一个月以内#&https://github.com/geo909/covering-arrays-from-msequences#&#&\n" +
        "coffee4j#&[Bonn/Fögen]#&2019#&2019#&开源或免费#&Java#&跨平台#&类库#&其他功能#&多种方法#&[1-n]#&n维#&不支持#&不支持#&#&单元测试#&#&#&#&EBN, Aifl,IterationBasedIterAifl和ImprovedDeltaDebugging4种定位方法, 自动生成和执行辅助测试用例, 进而定位可疑组合; #&源码中声明模型#&支持#&禁止元组#&未知#&#&Junit#&负面测试; 可集成生成算法#&github上2条commit记录#&三到六个月#&https://github.com/coffee4j/coffee4j#&A Framework for Automated Combinatorial Test Generation, Execution, and Fault Characterization#&\n" +
        "Pairwise Online Tool#&[Dementiev]#&#&#&开源或免费#&未知#&跨平台#&Web应用程序#&生成#&未知#&2, n#&2维#&不支持#&不支持#&#&#&#&#&#&#&不支持#&支持#&多种方式#&No#&Excel#&#&#&#&#&https://pairwise.teremokgames.com/4s8/#&#&\n" +
        "rdExpert#&Phadke Associates#&#&#&商业#&未知#&Windows平台#&单机图形界面 (GUI)#&其他功能#&数学方法#&2#&2维#&不支持#&不支持#&基于组合覆盖的排序; 二维组合约减#&#&#&自定义测试用例模板#&#&支持定位故障 (具体方法不详)#&不支持#&不支持#&#&#&Microsoft Office#&#&#&#&#&http://phadkeassociates.com/index_files/products.htm#&#&仅能从 web 介绍页面获取信息\n" +
        "QICT#&[McCaffrey]#&2009#&#&开源或免费#&C##&跨平台#&单机命令行 (CLI)#&生成#&一次一条贪心#&2#&2维#&不支持#&不支持#&#&#&#&#&#&#&自定义建模语法#&支持#&禁止元组#&未知#&#&#&#&#&#&https://github.com/sylvainhalle/QICT#&Test Run - Pairwise Testing with QICT#&\n" +
        "DPSO#&[Wu]#&2013#&2018#&开源或免费#&C/C++#&跨平台#&单机命令行 (CLI)#&生成#&多种方法#&[1-n]#&n维#&不支持#&不支持#&#&#&#&#&#&#&复用已有语法#&支持#&布尔表达式#&未知#&#&#&#&github上12条commit记录#&三到六个月#&https://github.com/waynedd/DPSO#&#&\n" +
        "AETGTestSuiteGenerator#&[Mber1991]#&2014#&2014#&开源或免费#&C/C++#&跨平台#&类库#&生成#&一次一条贪心#&2#&2维#&不支持#&不支持#&#&#&#&#&#&#&不支持#&不支持#&#&#&#&#&#&github上7条commit记录#&一到两个月#&https://github.com/mber1991/AETGTestSuiteGenerator#&#&每个参数取值个数一致\n" +
        "Pairwise_algorithms#&[Galland]#&2014#&2014#&开源或免费#&其他#&跨平台#&类库#&生成#&多种方法#&2#&2维#&不支持#&不支持#&#&#&#&#&#&#&不支持#&不支持#&#&#&#&#&#&github上13条commit记录#&一个月以内#&https://github.com/pgalland/Pairwise_algorithms#&#&\n" +
        "CAGenAlgos#&[ksarkar]#&2014#&2014#&开源或免费#&Java#&跨平台#&类库#&生成#&多种方法#&[1-n]#&n维#&不支持#&不支持#&#&#&#&#&#&#&不支持#&不支持#&#&#&#&#&#&github上12条commit记录#&一到两个月#&https://github.com/ksarkar/CAGenAlgos#&#&\n" +
        "CIT-BACH#&[Tsuchiya]#&2015#&2016#&开源或免费#&Java#&跨平台#&单机命令行 (CLI)#&生成#&一次一条贪心#&[2-5], n#&5维#&不支持#&支持#&#&#&#&#&#&#&自定义建模语法#&支持#&逻辑表达式#&No#&#&#&重复多次，选择最优解; 覆盖指定参数的所有值组合#&3个版本#&六个月以上#&http://www-ise4.ist.osaka-u.ac.jp/~t-tutiya/CIT/#&#&\n" +
        "yactt#&[Tsuchiya]#&2015#&2015#&开源或免费#&其他#&跨平台#&Web应用程序#&生成#&一次一条贪心#&[2-5]#&5维#&不支持#&支持#&#&#&#&#&#&#&复用已有语法#&支持#&逻辑表达式#&No#&#&#&负面测试; Aliasing (一个参数值的多个名字)#&github上51条commit记录#&一个月以内#&https://github.com/ikomamik/yactt#&#&借助了CIT-BACH工具\n" +
        "DVA313-02#&[Juananinca]#&2015#&2016#&开源或免费#&C##&Windows平台#&单机图形界面 (GUI)#&生成#&其他方法#&1#&1维#&不支持#&不支持#&#&#&#&#&#&#&自定义建模语法#&不支持#&#&#&CSV#&#&随机测试#&github上19条commit记录#&一到两个月#&https://github.com/juananinca/DVA313-02#&#&\n" +
        "covering_arrays_validator#&[Lappalainen]#&2015#&2015#&开源或免费#&Python#&跨平台#&单机命令行 (CLI)#&评估#&#&#&#&#&#&#&#&#&#&判断是否是[1-n]维覆盖表#&#&文本格式测试用例#&#&#&#&#&#&#&github上17条commit记录#&一个月以内#&https://github.com/jkklapp/covering_arrays_validator#&#&\n" +
        "OAs#&[Francetic]#&2015#&2015#&开源或免费#&Python#&跨平台#&单机命令行 (CLI)#&生成#&数学方法#&2#&2维#&不支持#&支持#&#&#&#&#&#&#&不支持#&不支持#&#&#&txt (reduced form)#&#&#&github上5条commit记录#&二到三个月#&https://github.com/nevenaf/OAs#&#&\n" +
        "CoveringArray#&[Ksarkar]#&2016#&2016#&开源或免费#&Java#&跨平台#&类库#&生成#&多种方法#&[1-n]#&n维#&不支持#&不支持#&#&#&#&#&#&#&不支持#&不支持#&#&#&#&#&#&github上11条commit记录#&一到两个月#&https://github.com/ksarkar/CoveringArray#&#&\n" +
        "pairwise-testing#&[Rasmus]#&2016#&2017#&开源或免费#&其他#&跨平台#&Web应用程序#&生成#&集成其他工具#&2#&2维#&支持#&不支持#&#&#&辅助执行 (指定预期输出)#&#&#&#&复用已有语法#&支持#&逻辑表达式#&No#&#&#&Aliasing (一个参数值的多个名字); 负面测试; 设置参数权重#&github上12条commit记录#&二到三个月#&https://github.com/rasmusselsmark/pairwise-testing#&#&需要本地部署\n" +
        "greedy_covering#&[Mittal]#&2016#&2017#&开源或免费#&其他#&跨平台#&单机命令行 (CLI)#&生成#&一次一条贪心#&3#&3维#&不支持#&不支持#&#&#&#&#&#&#&不支持#&不支持#&#&#&#&#&#&github上10条commit记录#&二到三个月#&https://github.com/smittal6/greedy-covering#&A density-based greedy algorithm for higher strength covering arrays#&\n" +
        "pairwise-testing#&[SelinGungor]#&2017#&2017#&开源或免费#&Python#&跨平台#&单机命令行 (CLI)#&生成#&一次一条贪心#&2#&2维#&不支持#&不支持#&#&#&#&#&#&#&自定义建模语法#&不支持#&#&#&#&#&#&github上21条commit记录#&一个月以内#&https://github.com/SelinGungor/pairwise-testing#&#&\n" +
        "GenPairs#&[Young]#&2017#&2017#&开源或免费#&Python#&Linux平台#&单机命令行 (CLI)#&生成#&一次一条贪心#&2#&2维#&不支持#&支持#&#&#&#&#&#&#&自定义建模语法#&支持#&布尔表达式#&Yes#&#&#&找出未覆盖组合#&github上12条commit记录#&一到两个月#&https://github.com/TestCreator/GenPairs#&#&\n" +
        "beanfiller-tcases#&[Kruse]#&2018#&2018#&开源或免费#&Java#&跨平台#&类库#&生成#&集成其他工具#&[1-n]#&n维#&不支持#&不支持#&#&#&#&#&#&#&源码中声明模型#&不支持#&#&#&#&#&#&github上3条commit记录#&三到六个月#&https://github.com/beanfiller/beanfiller-tcases#&#&\n" +
        "pairwise_test_case_generator#&[Ryiwamoto]#&2018#&2018#&开源或免费#&其他#&跨平台#&Web应用程序#&生成#&一次一条贪心#&2#&2维#&不支持#&不支持#&#&#&#&#&#&#&不支持#&不支持#&#&#&#&#&生成json格式测试用例#&github上2条commit记录#&三到六个月#&https://github.com/ryiwamoto/pairwise_test_case_generator#&#&\n" +
        "jpwise#&[Davydov]#&2018#&2019#&开源或免费#&Java#&跨平台#&类库#&生成#&其他方法#&2, n#&2维#&不支持#&不支持#&#&#&#&#&#&#&源码中声明模型#&支持#&布尔表达式#&No#&#&#&#&github上6条commit记录#&三到六个月#&https://github.com/mike-d-davydov/jpwise#&#&\n" +
        "one-wise#&[Pinto]#&2018#&2018#&开源或免费#&其他#&跨平台#&类库#&生成#&其他方法#&1#&1维#&不支持#&不支持#&#&#&#&#&#&#&源码中声明模型#&不支持#&#&#&#&#&#&github上19条commit记录#&一个月以内#&https://github.com/thiagodp/one-wise#&#&";
    window.localStorage.setItem("tools",data);
   // alert(tools[1]);
}


