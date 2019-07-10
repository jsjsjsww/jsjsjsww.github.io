
$(document).ready(function(){
   // readTextFile("file:///C:/ckcore.txt")
    GetHeader();
});

function GetHeader() {
    //var file = document.querySelector("fileName");
   // alert(file.files[0]);
    var data = "AETG#&Telcordia#&1994#&#&Commercial#&#&Cross#&Web APP#&Greedy (OTAT)#&2, 3, n#&Y#&Y#&#&#&#&#& #&Y#&Forbidden tuple#&#&#&#&负面测试#&#&#&[1] The Automatic Efficient Tests Generator (AETG) System [2] The AETG System: An Approach to Testing Based on Combinatorial Design#&The website is not avaiable now.\n" +
        "TESTONA#&Berner & Mattner Systemtechnik GmbH#&2000#&2019#&Commercial#&Java#&Windows#&Desktop(GUI)#&Classification Tree Based#&1, 2, 3, n#&Y#&#&带权重的组合覆盖率排序、基于预设覆盖率的约减#&支持 non-automated, implicit, derived, specified oracles 确定预期输出，导出 Shell, XML, Text, JUnit, SQL 等测试用例格式，支持测试结果标注#&(可单独使用)组合覆盖率计算#&(可单独使用)参数取值出现故障的比例 (例如参数p的取值0一共在测试用例中出现4次, 其中3条测试用例故障, 因此该取值的故障概率是3/4)#&Classification Tree (XML)#&Y#&Logical formula#&Y#&Excel, TXT, PDF, jpg, HTML#&多种输入输出格式，可与 AUTOSAR, Matlab / Simulink, IBM Rational DOORS, HP ALM, Atlassian Jira, Trello, Redmine 等配合使用#&追踪需求变化，支持各类 specification-based test methds (ISO 29119)，提供 training#&多个版本，当前 Version 5.9.0 (2019)#&https://www.assystem-germany.com/en/products/testona/#&Combinatorial Testing in an Industrial Environment-Analyzing the Applicability of a Tool#&\n" +
        "Tconfig#&[Williams]#&2000#&#&#&C++ & Java#&#&#&Mathematical#&2#&#&#&#&#&#&#&#&#&#&#&#&#&#&#&#&Determination of Test Configurations for Pair-Wise Interaction Coverage#&\n" +
        "Pro-Test#&SigmaZone#&2002#&#&Commercial#&#&Windows#&Desktop (GUI)#&#&2, n#&#&Y#&#&#&#&#&自定义 XML#&Y#&Forbidden tuple (2-way)#&Y#&XML, HTML, Excel, CSV, TXT#&#&#&#&http://sigmazone.com/protest/#&#&\n" +
        "AllPairs#&MetaCommunications#&2002#&2009#&Open Source#&Python#&Cross#&Library (Python)#&Greedy (OTAT)#&1, 2#&#&Y#&#&#&#&#&Python Source Code#&Y#&Forbidden tuple (EB)#&#&#&#&#&3个历史版本：2.0版本增加n维生成，2.0.1版本增加安装脚本，编辑示例#&https://sourceforge.net/projects/allpairs/#&#&基于python2版本\n" +
        "Bender RBT#&BenderRBT Inc#&2002#&#&Commercial#&#&Windows#&Desktop (GUI)#&Mathematical & Optimized#&2#&#&#&#&自然语言描述测试用例#&组合覆盖率可视化度量，可导出；code coverage monitor#&#&自定义#&Y#&Logical formula#&#&TOSCA#&导出为 RTF，用于 RM 工具或 word processor; 支持TestIF; 直接导出到 HP-Mercury’s test management tool 和 Tricentis’s TOSCA#&给用例添加标注#&多个版本，当前release 8.0#&http://www.benderrbt.com/bendersoftware.htm#&#&Cause-Effect Graphing 和 Quick Design (CT) 两种模式\n" +
        "CTS#&IBM#&2002#&#&#&C++#&Cross#&Library#&Mathematical#&[1-4]#&#&#&#&#&组合覆盖率计算#&#&#&Y#&Forbidden tuple#&#&TXT, ATS (abstract test suite), CSV#&#&#&#&#&#&\n" +
        "AllPairs#&Satisfice#&2002 (是最新版本的时间)#&#&Open Source#&Perl#&Cross#&Desktop (CLI)#&Greedy (OTAT)#&2#&#&#&#&#&标出每条测试用例覆盖的新组合数以及每个组合出现在哪些用例中#&#&自定义 TXT#&#&#&#&#&#&标出 don't care position#&\"4个历史版本 v1.01编译优化增加“don't care”位置标注 v1.1增加测试用例和组合对应信息 v1.2修正bug和使用说明 v1.2.1修正bug\"#&http://www.satisfice.com/tools.shtml#&#&\n" +
        "TestCover#&Testcover.com#&2003#&2017#&Commercial#&PHP#&Cross#&Web App & Web Service#&Mathematical#&2#&#&#&#&#&覆盖元组数计算#&#&Direct Product Block (DPB) notation (TXT)#&Y#&Sub model & Embedded Functions#&Y#&#&#&提供 WSDL interface，提供 tutorial，提供性能比较#&2017年加入 Embedded function#&[1]https://testcover.com/index.php; [2]https://testcover.com/pub/background/cover.htm#&Embedded Functions for Constraints and Variable Strength in Combinatorial Testing#&需要注册\n" +
        "Jenny#&[Jenkins]#&2003#&2005#&Open Source#&C#&Cross#&Desktop (CLI)#&Greedy (OTAT-Incremental)#&[1-32]#&#&Y#&#&#&#&#&#&Y#&Forbidden tuple#&Y#&#&#&#&4次更新历史，截止到 2005 年#&http://burtleburtle.net/bob/math/jenny.html#&#&参数个数最多52个\n" +
        "Test Vector Generator (TVG)#&[Arshem/Schroeder]#&2004#&#&Open Source#&Java#&Cross#&Desktop (GUI)#&#&[1-10], n#&Y#&#&#&#&#&#&#&#&#&#&TXT#&#&随机测试，在输入输出文件中自定义comment#&#&https://sourceforge.net/projects/tvg/#&#&\n" +
        "Intelligent Test Case Handler#&IBM#&2005#&#&#&Java#&#&Plug-in of IDE#&#&#&#&#&#&#&#&#&#&#&#&#&#&#&集成其他算法#&#&http://freshmeat.sourceforge.net/projects/ibmintelligenttestcasehandler#&#&\n" +
        "SpecExporer#&Microsoft#&2005#&2010#&Free Use#&C##&Windows#&Plug-in of IDE#&#&[2-n]#&Y#&Y#&#&支持执行model base testing #&#&#&C# Source Code#&Y#&Forbidden tuple#&#&#&#&该工具主要功能是model based testing, 实现CT作为modeling techniques之一; 负面测试, test goal#&多个版本，最新spec explorer 2010#&https://docs.microsoft.com/en-us/previous-versions/visualstudio/spec-explorer/ee620448%28v%3dspecexplorer.10%29#&Model-Based Testing of Object-Oriented Reactive Systems with Spec Explorer#&\n" +
        "ATD#&AtYourSide Consulting#&2006#&#&Commercial#&VB#&Windows#&Desktop (GUI)#&Neural Network Optimization(归类search besed)#&[1-3], n#&#&#&#&Automatically generate test scripts for automation tool#&#&#&#&Y#&#&#&#&可生成测试脚本和其它主流自动化测试工具配合使用(Mercury’s WinRunner and QuickTest, Compuware’s TestPartner or IBM Rational Robot), 与TestDirector、QualityMate集成#&#&#&http://atyourside.pt/products/atd/atd_description.html#&#&\n" +
        "Jwrap#&Ramesh Ramanl#&2006#&2009#&Open Source#&VB#&Windows#&Desktop (GUI)#&Jenny 工具#&[1-5]#&#&#&#&#&#&#&自定义 Excel#&Y#&Forbidden tuple#&Y#&Excel#&#&#&7条更新记录#&https://sourceforge.net/projects/jwrap/#&#&\n" +
        "PICT#&Microsoft#&2006#&2018#&Open Source#&C++#&Cross#&Desktop(CLI) & Library#&Greedy (OTAT)#&[1-n]#&Y (子模型)#&Y#&#&预定义测试用例结果#&#&#&自定义 TXT#&Y#&Logical formula#&Y#&#&#&参数类型，Aliasing (把一个参数值的多个名字), 负面测试, 参数值权重,  重用已有测试用例#&59条commit#&https://github.com/Microsoft/pict#&Pairwise Testing in Real World#&\n" +
        "OATSGen#&Motorola#&2007#&#&in-house#&#&Cross#&Web APP#&IPO#&2#&#&#&#&#&#&#&自定义 Excel#&Y#&Forbidden tuple (2-way)#&#&#&#&#&#&#&Combinatorial Testing: Learnings from our Experience#&\n" +
        "ACTS#&NIST#&2007#&2016#&Free Use#&Java#&Cross#&Desktop (GUI) & Desktop (CLI)#&IPO#&[1-6]#&Y#&Y#&#&#&(可单独使用) 组合覆盖率可视化度量; 检测覆盖表在1-6维上覆盖情况#&#&命令行工具模型是 TXT、GUI 导入 TXT或XML 模型#&Y#&Logical formula#&Y#&Excel, CSV, NIST#&#&Extend (可对已有测试用例集纵向横向进行扩展), 负面测试, don't care位置#&最早版本可追溯到 1998 年的IPO (PairTest) 2-way 测试工具，最新版本3.0#&https://csrc.nist.gov/projects/automated-combinatorial-testing-for-software#&[1]IPOG_A General Strategy for T-Way Software Testing;[2]ACTS: A combinatorial test generation tool;[3]Combinatorial Testing of ACTS_A Case Study#&\n" +
        "JTst#&[Zamli/Isa/Klaib/Azizan]#&2007#&#&#&Java#&Cross#&#&Greedy (OTAT)#&#&#&Y#&#&生成接口调用代码#&#&#&#&#&#&#&#&#&#&#&#&Designing a combinatorial Java unit testing tool#&\n" +
        "EXACT#&[Yan/Zhang]#&2008#&#&#&C#&#&#&Exhaustive Search#&#&#&#&#&#&#&#&#&#&#&#&#&#&#&#&#&A backtracking search tool for constructing combinatorial test suites#&http://lcs.ios.ac.cn/~yanjun/research/EXACT.html 邮件申请，无回复\n" +
        "PictMaster#&IWATSU System & Software#&2008#&2017#&Free Use#&VB#&Windows#&Desktop (GUI)#&PICT工具#&[1-50]#&Y#&Y#&#&设置测试结果#&覆盖率评估#&#&#&Y#&Logical formula#&Y#&Excel#&#&PICT, 生成满足指定覆盖率的覆盖表, 多次调用PICT选择最小覆盖表#&多个版本, 最新5.7.3E (2013); 还有日文版，最新2017#&https://osdn.net/projects/pictmaster/#&#&基于PICT工具, 最多50个参数和50条约束\n" +
        "CASA#&[Garvin/Cohen/Dwyer]#&2009#&#&Open Source#&C++#&Linux#&Desktop (CLI)#&Search based#&[1-n]#&#&#&#&#&#&#&自定义 TXT#&Y#&Boolean formula#&#&TXT#&#&#&#&https://cse.unl.edu/~citportal/#&[1]An Improved Meta-Heuristic Search for Constrained Interaction Testing;[2]Evaluating improvements to a meta-heuristic search for constrained interaction testing#&\n" +
        "Hexawise#&Hexawise#&2009#&2019#&Commercial#&#&Cross#&Web APP#&#&[2-6]#&Y#&Y#&#&生成自然语言描述的测试步骤，设置测试前和测试结束后的操作描述；设置用例满足某条件的预期结果#&组合覆盖率可视化度量#&#&Excel, OPML#&Y#&Forbidden tuple#&#&Supposed to export (Excel, CSV, OPML)#&HP Quality Center#&声明test goal (可用于seed)，为客户定制工具，技术支持与培训#&从2010到2019有403条更新记录#&https://hexawise.com/#&#&没有公司Email，申请不了\n" +
        "ATIG  (for ORM)#&[McGill/Stirewalt/Dillon]#&2009#&#&#&#&#&#&Jenny 工具#&#&#&#&#&#&#&#&#&Y#&Forbidden tuple#&#&#&#&#&#&#&Automated test input generation for software that consumes ORM models#&\n" +
        "Nunit#&[Poole/Prouse/Busoli/Colvin]#&2009#&2019#&Open Source#&C##&Windows#&Library (.Net)#&Search based#&2, n#&#&#&#&单元测试#&#&#&source code#&#&#&#&#&#&Annotation语法#&gihub上有40个release, 最新3.11#&https://nunit.org/#&#&单元测试框架\n" +
        "pairwise#&[Wilk]#&2009#&2019#&Open Source#&Ruby#&Cross#&Desktop (CLI)#&IPO#&2#&#&#&#&#&#&#&自定义yml或CVS#&#&#&#&#&#&标出灵活位置，CSV格式测试用例#&163次commit#&https://github.com/josephwilk/pairwise#&#&\n" +
        "VPTAG#&[Robert Vanderwall]#&2010#&#&Open Source#&Java#&Cross#&Desktop (GUI)#&IPO#&1, 2, n#&#&#&#&#&#&#&自定义 XML#&Y#&Boolean formula#&#&#&#&#&#&https://sourceforge.net/projects/vptag/#&#&\n" +
        "PWiseGen#&[Flores/Cheon]#&2010#&#&Open Source#&Java#&Cross#&Library (Java)#&Search based#&2#&#&#&#&#&#&#&自定义TXT#&#&#&#&TXT#&#&配置遗传算法参数#&#&https://code.google.com/archive/p/pwisegen/#&PWiseGen: Generating Test Cases for Pairwise Testing Using Genetic Algorithms#&\n" +
        "TestTwo#&[Eads]#&2010 (v0.03)#&#&Open Source #&Ruby#&Cross#&Desktop (CLI)#&Greedy (OTAT)#&2#&#&#&#&#&#&#&自定义TXT (沿用AllPairs-Satisfice)#&#&#&#&CSV, TXT#&#&#&(无时间信息) 4个历史版本，最新v0.031由 Satisfice 公司 AllPairs 工具演化而来#&https://sourceforge.net/projects/testtwo/#&#&\n" +
        "tcases#&[kimbrough]#&2010#&2019#&Open Source#&Java#&Cross#&Desktop (CLI) & Library (java)#&#&[1-n]#&Y#&Y#&#&把覆盖表转换成Junit/TestNG测试用例#&#&#&自定义XML & JSON#&Y#&Logical formula#&#&XML, HTML, Junit/TestNG tests, XSLT#&#&负面测试, 重用已有测试用例集, 多次运行找出最小用例集, 减少特点组合出现次数#&github上有20个releases, 最新3.0.2#&https://github.com/Cornutum/tcases#&#&\n" +
        "NTestCaseBuilder#&[Murphy]#&2010#&2014#&Open Source#&F##&Windows#&Library (.Net)#&#&[2-n]#&#&#&#&单元测试#&#&#&source code#&#&#&#&#&#&Annotation语法#&19个release，606commit#&https://www.nuget.org/packages/NTestCaseBuilder/#&#&\n" +
        "MoSo-PoLiTe (for SPL)#&[Oster/Zorcic/Markert/Lochau]#&2011#&#&Commercial#&#&#&Plug-in of IDE#&Greedy (CSP)#&2, 3, 4#&#&Y#&#&#&#&#&#&Y#&Logical formula#&#&#&基于 SPL 的 pure:variant (variant management) 和 ATG 工具进行测试数据生成#&#&#&#&[1] MoSo-PoLiTe: tool support for pairwise and model-based software product line testing [2] Automated Incremental Pairwise Testing of Software Product Lines#&\n" +
        "CPUT (优化排序 for HTTP)#&[Sampath/Bryce/Jain/Manchester]#&2011#&#&#&Java#&Cross#&Desktop (GUI)#&#&#&#&#&HTTP请求数目由多到少排序；用例涉及参数个数由多到少排序；2维元组覆盖排序；基于2维组合约减#&#&#&#&#&#&#&#&XML#&#&#&#&#&A Tool for Combinatorial-based Prioritization and Reduction of User Session Based Test Suites#&\n" +
        "FOCUS#&IBM#&2011#&#&Commercial#&Java#&Cross#&Desktop (GUI)#&Binary Decision Diagrams based (OTAT)#&#&Y#&Y#&在不影响原覆盖表覆盖率的前提下约减覆盖表#&specify expected results#&提供matrix, graph based, tree based三种可视化, 计算组合覆盖率#&#&#&Y#&Boolean formula & Forbidden tuple#&#&#&#&负面测试, 设置参数值权重, 协助建模, 验证模型正确性, 形式化描述模型迭代, 模型更改时重用已有用例, 组合测试模型可视化#&#&https://researcher.watson.ibm.com/researcher/view_group.php?id=1871#&Using Binary Decision Diagrams for Combinatorial Test Design#&\n" +
        "SPLCATool (for SPL)#&[Johansen]#&2011#&2012#&Open Source#&Java#&Cross#&Desktop (CLI)#&Greedy (OTAT)#&1, 2, 3#&#&Y#&#&自动化测试执行 (Eclipse-Based Product Lines)#&(可单独使用)计算组合覆盖率, weight覆盖率#&#&FM (GUI DSL Model, XML, DIMACS, CVL)#&Y#&Boolean formula#&Y#&CSV#&自动化测试链接Hudson和Jenkins等持续集成工具#&组合测试模型检查, 验证覆盖表正确性, 集成IPOG、CASA和MoSoPoLiTe生成方法, 修改模型时重用已有覆盖表, 带权重的SPL (某些常用配置), 提高weight覆盖率的建议#&5个版本; 该工具演化成pairwiser工具#&https://github.com/SINTEF-9012/SPLCATool#&An Algorithm for Generating t-wise Covering Arrays from Large Feature Models#&\n" +
        "Jcombinatorial#&[Reeder]#&2011#&2017#&Open Source#&Java#&Cross#&Library (Java)#&OTAT#&1, 2, n#&#&#&#&集成Junit#&#&#&#&#&#&#&#&Junit#&#&32次commit#&https://github.com/jeremyreeder/jcombinatorial#&#&\n" +
        "Comb TestWeb#&Universidad de castillala Mancha#&2011#&#&Free Use#&#&Cross#&Web APP#&multiple#&1, 2, n#&#&Y#&#&预设测试用例模板, 设置测试结果#&#&#&自定义txt (GRAMMAR)#&Y#&Forbidden tuple#&Y#&CSV#&#&随机测试, 权重大的组合出现概率高#&#&http://alarcosj.esi.uclm.es/CTWeb#&#&网站访问不了\n" +
        "Ttuples#&[Calvagna/Gargantini]#&2012#&#&#&#&#&#&IPO#&[2-n]#&#&#&#&#&#&#&#&Y#&Forbidden tuple#&#&#&#&#&#&#&T-wise combinatorial interaction test suites construction based on coverage inheritance#&链接访问不了\n" +
        "CITLAB#&[Calvagna/Gargantini/Vavassori]#&2012#&2018#&Open Source#&Java#&Cross#&Plug-in of IDE#&multiple#&[2-n]#&#&Y#&约减冗余覆盖表#&#&所有元组是否覆盖#&#&自定义 (GRAMMAR)#&Y#&Logical formula#&Y#&Excel, CSV#&#&test goal; 检测模型#&2316条commit#&https://sourceforge.net/projects/citlab/#&[1]Combinatorial Interaction Testing with CITLAB [2]CITLAB: A Laboratory for Combinatorial Interaction Testing#&XTEXT来描述模型\n" +
        "PLEDGE (for SPL)#&[Henard/Papadakis/Perrouin]#&2012#&2016#&Free Use#&Java#&Cross#&Desktop (GUI) & Desktop (CLI)#&search based#&#&#&#&(可单独使用)基于测试用例相似度排序 (贪心/近似最优)#&#&(可单独使用)2维覆盖率计算#&#&FM (SPLOT, DIMACS)#&Y#&Boolean formula#&#&TXT#&#&#&17个commit#&https://research.henard.net/SPL/PLEDGE/#&PLEDGE: A Product Line Editor and Test Generation Tool#&在指定时间内生成指定条数的覆盖表, 最大化覆盖率\n" +
        "ecFeed#&ecFeed AS#&2013#&2018#&Open Source#&Java#&Cross#&Plug-in & Desktop (GUI)#&OTAT#&[1-n]#&#&#&#&定制测试用例模板; 设置测试结果; 为Java编写的待测软件、web应用和安卓应用执行测试用例#&(可单独使用) 组合覆盖率评估#&#&#&Y#&Logical formula#&#&CSV, XML, Cherkin#&Junit, selenium#&随机测试, 自适应随机测试, 生成指定覆盖率的覆盖表#&3615条commit，22个release#&http://ecfeed.com/  a fork https://github.com/testify-no/ecFeed-public#&#&\n" +
        "PWTool (for WEB)#&[SUNGKUR/MUHAMODSAROAR]#&2013#&#&#&#&Cross#&Web APP#&IPO#&2#&#&#&#&#&#&#&#&Y#&#&#&#&#&#&#&#&PWTool: A novel automated tool for pairwise testing#&\n" +
        "pairwise#&[khaggard]#&2013#&2014#&Open Source#&Java#&Cross#&Library (Java)#&Greedy (OTAT)#&2#&#&#&#&#&#&#&#&#&#&#&#&#&#&16个commit#&https://github.com/RetailMeNot/pairwise#&#&\n" +
        "Cascade#&[Zhao/Zhang/Yan/Zhang]#&2013#&#&#&#&#&#&Greedy (CSP)#&#&Y#&Y#&#&#&#&#&自定义 (GRAMMAR)#&Y#&Logical formula#&#&#&#&#&#&#&Cascade: A Test Generation Tool for Combinatorial Testing#&\n" +
        "CCM (评估)#&[Dominguez/Kuhn/Kacker/Lei]#&2013#&#&Free Use#&Java#&Cross#&Desktop (GUI)#&#&#&#&#&#&#&2-6维组合覆盖率评估#&#&#&Y#&Logical formula#&#&#&#&生成未覆盖组合, 找出非法组合#&后续版本CCMCL (CL=命令行)#&#&CCM: A tool for measuring combinatorial coverage of system state space#&定义了多种覆盖度量指标, 邮件还没回复\n" +
        "JCUnit (for MBT)#&[Ukai]#&2013#&2019#&Open Source#&Java#&Cross#&Library (java)#&multiple (已知有IPO和AETG)#&[1-n]#&#&Y#&#&集成Junit, 预期输出#&组合覆盖率计算#&#&source code#&Y#&EB#&#&#&Junit#&负面测试, Annotation语法#&github上有82个releases, 最新0.8.17#&https://github.com/dakusui/jcunit#&#&\n" +
        "ERIS (执行)#&[Garn, Simos]#&2014#&#&#&C#&#&#&ACTS工具#&#&#&#&#&为Linux系统调用接口执行测试#&#&#&#&#&#&#&#&#&#&#&#&Eris: A Tool for Combinatorial Testing of the Linux System Call Interface#&for linux system call api, 测试结果判断 (内核是否崩溃)\n" +
        "ct_common#&[Zhang]#&2014#&2016#&Open Source#&C++#&Cross#&Library#&#&[1-n]#&Y#&Y#&#&#&#&#&自定义, 和Cascade相似#&Y#&Logical formula#&#&#&#&test goal (组合或逻辑表达式); 重用已有测试用例; 屏蔽约束#&gihub上有15个release, 最新2.0.2，110个commit#&https://github.com/xxyzzzq/ct_common#&#&用于Cascade工具\n" +
        "Xunit.Combinatorial#&[Arnott]#&2015#&2018#&Open Source#&C##&Windows#&Library#&Greedy (OTAT)#&2#&#&#&#&单元测试#&#&#&source code#&#&#&#&#&xunit#&Annotation语法#&多个版本，最新1.2.7 (2017)，67个commit#&https://github.com/AArnott/Xunit.Combinatorial#&#&\n" +
        "BEN (故障定位)#&[Ghandehari/Chandrasekaran/Lei/Kacker/Kuhn]#&2015#&#&Free Use#&Java#&Cross#&Desktop (GUI) & Desktop (CLI)#&#&#&#&#&#&#&#&迭代的过程, 每次迭代执行部分测试用例, 进而更新可疑组合; 可定位到代码#&自定义#&#&#&#&#&#&#&#&http://barbie.uta.edu/~laleh/BEN.html#&[1]Evaluating the Effectiveness of BEN in Localizing Different Types of Software Fault [2]BEN: A Combinatorial Testing-Based Fault Localization Tool#&图形界面版本需要待测软件源码, 命令行版本不需要\n" +
        "pairwiser#&Inductive#&2015#&#&Commercial#&#&Cross#&Web APP#&#&1, 2, 3#&Y#&Y#&#&预设测试用例模板#&组合覆盖率可视化展示#&#&#&Y#&Logical formula#&#&Excel, JIRA#&#&#&#&https://inductive.no/pairwiser/#&#&免费试用版于2018.01.15关闭\n" +
        "covering-arrays (评估)#&[Badahdah]#&2015#&2015#&Open Source#&C#&Cross#&Desktop (CLI)#&#&#&#&#&#&#&2 验证覆盖率#&#&#&#&#&#&#&#&标出don't care位置#&8个commit#&https://github.com/djblue/covering-arrays#&#&可并行; 参数取值个数必须统一\n" +
        "generateMCA#&[Wang]#&2015#&2017#&Open Source#&C++#&Windows#&Library (C++)#&Search based#&[2-n]#&#&#&#&#&#&#&#&#&#&#&#&#&#&5个commit#&https://github.com/laoyaolandq/generateMCA#&#&\n" +
        "CPTG#&[Nakornburi, Suwannasart]#&2016#&#&#&JAVASCRIPT#&#&#&IPO#&2#&#&#&#&#&#&#&user profile(.csv)#&Y#&Logical formula & Forbidden tuple#&#&#&#&#&#&#&A tool for constrained pairwise test case generation using statistical user profile based prioritization#&使用replace方法处理约束\n" +
        "CCMCL (评估)#&NIST#&2016#&2017#&Open Source#&Java#&Cross#&Desktop (CLI)#&#&#&#&#&#&#&可视化2-6维组合覆盖率#&#&CSV和TXT格式测试用例, ACTS输出文件#&Y#&Logical formula#&#&#&读取ACTS工具文件#&找出未覆盖组合, 找出非法组合, 递增式计算覆盖率 (不断有新测试用例加入)#&98个commit#&https://github.com/usnistgov/combinatorial-testing-tools#&#&\n" +
        "KTK#&[Tsuchiya]#&2016#&2018#&Open Source#&C#&Windows#&Desktop (CLI)#&Mathematical#&2#&#&#&#&#&#&#&#&#&#&#&#&#&标出don't care位置#&main.c中提到v0.4(2016) github上有6次commit#&https://github.com/tatsuhirotsuchiya/KTK#&A new method for constructing pair-wise covering designs for software testing#&\n" +
        "medici#&[Corna]#&2017#&2017#&Open Source#&C++#&Cross#&Desktop (CLI)#&MDD based (OTAT) (Greedy)#&#&#&#&#&#&#&#&CASA格式模型文件#&Y#&Boolean formula#&#&#&#&验证模型#&24个commit#&https://github.com/garganti/medici#&Efficient Combinatorial Test Generation based on Multivalued Decision Diagrams#&集成到CITLAB中\n" +
        "Covering-Array-Generator#&[Dott]#&2017#&2018#&Open Source#&Java#&Cross#&Desktop (CLI)#&每次处理两个参数, 保证这两个参数的所有组合被覆盖, 如果某组合未覆盖，从全组合表中选出一条覆盖该组合的测试用例加入当前覆盖表#&2#&#&#&#&#&#&#&#&#&#&#&#&#&#&16个commit#&https://github.com/jkd28/Covering-Array-Generator#&#&所有参数均是2值\n" +
        "CHiP#&[Sabanci University Software Engineering Group]#&2017#&2018#&Free Use#&#&#&Desktop (CLI)#&Search based#&2, 3, 4#&#&#&#&#&#&#&自定义txt#&Y#&Forbidden tuple#&#&#&#&#&15个commit#&https://github.com/susoftgroup/CHiP#&#&并行\n" +
        "CTWEDGE#&[Gargantini/Radavelli]#&2018#&2019#&Open Source#&Java#&Cross#&Web APP & plugin#&ACTS和CASA工具#&[1-n]#&#&#&#&#&#&#&自定义 (沿用CitLab)#&Y#&Logical formula#&N#&CSV & excel#&#&协助建模, 检测模型正确性, 语法和格式规范#&121个commit#&https://github.com/fmselab/ctwedge#&Migrating combinatorial interaction test modeling and generation to the web#&建模语言\n" +
        "cametrics (评估)#&[Leithner/Kleine/Simos]#&2018#&#&Free Use#&Rust#&Cross#&Web APP & Desktop (CLI)#&#&#&#&#&#&#&[1-n]组合覆盖率可视化展示, 每条测试用例新覆盖组合数, 基于距离的评估#&#&导入CSV和ACTS格式#&Y#&Logical formula#&#&#&#&#&#&https://matris.sba-research.org/tools/cametrics#&CAmetrics: A tool for advanced combinatorial analysis and measurement of test sets#&\n" +
        "CSCM (评估)#&[Ratliff]#&2018#&2019#&Open Source#&Haskell#&Cross#&Desktop (CLI)#&#&#&#&#&#&#&计算组合覆盖率 (维度不确定)#&#&TXT格式测试用例#&#&#&#&#&#&找出未覆盖组合#&21个commit#&https://github.com/zachratliff22/CSCM-Tool#&#&可并行\n" +
        "CAGen#&SBA Research#&2018#&#&Free Use#&Rust#&Cross#&Web APP & Desktop (CLI)#&IPO#&[1-n]#&#&#&#&#&#&#&ACTS格式模型文件#&Y#&Boolean formula#&#&CVS#&#&设置组合冗余度 (每个组合至少覆盖几次); 把模型转化成ACTS, PICT, CAGen命令行工具的模型; 把测试用例转换成matlab, python格式; don't care位置#&#&https://matris.sba-research.org/tools/cagen/#/workspaces#&#&\n" +
        "Covering_Arrays#&[Haskins]#&2018#&2018#&Open Source#&Python#&Cross#&Desktop (CLI)#&Multiple (greedy和hill climbing)#&[1-n]#&#&#&#&#&#&#&#&#&#&#&#&#&#&31个commit#&https://github.com/tijohask/Covering_Arrays#&#&\n" +
        "covering-arrays-from-msequences#&[Tzanakis]#&2018#&2018#&Open Source#&Python#&Cross#&Desktop (CLI)#&Mathematical (based on maximal sequences)#&#&#&#&#&#&#&#&#&#&#&#&#&#&#&15个commit#&https://github.com/geo909/covering-arrays-from-msequences#&#&\n" +
        "coffee4j#&[Bonn/Fögen]#&2019#&2019#&Open Source#&Java#&Cross#&Library#&Multiple (IPO)#&[1-n]#&#&#&#&单元测试#&#&(多个定位方法) 迭代的过程, 每次迭代执行部分测试用例, 进而更新可疑组合; #&source code#&Y#&Forbidden tuple#&#&#&Junit#&robustness testing; 可集成生成算法#&2个commit#&https://github.com/coffee4j/coffee4j#&#&\n" +
        "Pairwise Online Tool#&[Dementiev]#&#&#&Free Use#&#&Cross#&Web APP#&#&2, n#&#&#&#&#&#&#&#&Y#&if then & Forbidden tuple#&#&Excel#&#&#&#&https://pairwise.teremokgames.com/4s8/#&#&\n" +
        "rdExpert#&Phadke Associates#&#&#&Commercial#&#&Windows#&Desktop (GUI)#&Mathematical (OA)#&2#&#&#&Prioritize test cases based on coverage and ensure pairwise coverage#&Translate test conditions into a complete set of customized test scripts/test procedures.#&#&Can isolate root causes of failure#&#&#&#&#&MS Office#&#&#&#&http://phadkeassociates.com/index_files/products.htm#&#&仅能从 web 介绍页面获取信息\n" +
        "QICT#&[McCaffrey]#&2009#&#&open source#&C##&Cross#&Desktop (CLI)#&Greedy (OTAT)#&2#&#&#&#&#&#&#&自定义#&Y#&禁止元组#&#&#&#&#&#&https://github.com/sylvainhalle/QICT#&Test Run - Pairwise Testing with QICT#&\n" +
        "DPSO#&[wu]#&2013#&2018#&open source#&C++#&Cross#&Desktop (CLI)#&Multiple#&[1-n]#&#&#&#&#&#&#&复用CASA#&Y#&boolean formula#&#&#&#&#&12条commit记录#&https://github.com/waynedd/DPSO#&#&\n" +
        "AETGTestSuiteGenerator#&[mber1991]#&2014#&2014#&open source#&C++#&Cross#&Library#&Greedy (OTAT)#&2#&#&#&#&#&#&#&#&#&#&#&#&#&#&7条commit记录#&https://github.com/mber1991/AETGTestSuiteGenerator#&#&每个参数取值个数一致\n" +
        "Pairwise_algorithms#&[Galland]#&2014#&2014#&open source#&Ocaml#&Cross#&Library#&Multiple#&2#&#&#&#&#&#&#&#&#&#&#&#&#&随机测试#&13条commit记录#&https://github.com/pgalland/Pairwise_algorithms#&#&\n" +
        "CAGenAlgos#&[ksarkar]#&2014#&2014#&open source#&Java#&Cross#&Library#&Multiple#&[1-n]#&#&#&#&#&#&#&#&#&#&#&#&#&#&12条commit记录#&https://github.com/ksarkar/CAGenAlgos#&#&\n" +
        "CIT-BACH#&[Tsuchiya]#&2015#&2016#&Free Use#&Java#&Cross#&Desktop (CLI)#&Greedy (OTAT)#&[2-5], n#&#&Y#&#&#&#&#&自定义#&Y#&Logical formula#&#&#&#&重复多次，选择最优解；覆盖指定参数的所有值组合#&3个版本#&http://www-ise4.ist.osaka-u.ac.jp/~t-tutiya/CIT/#&#&\n" +
        "yactt#&[Tsuchiya]#&2015#&2015#&open source#&JavaScript#&Cross#&Web APP#&Greedy (OTAT)#&[2-5]#&#&Y#&#&#&#&#&复用PICT#&Y#&Logical formula#&#&#&#&负面测试，aliasing#&51条commit记录#&https://github.com/ikomamik/yactt#&#&借助了CIT-BACH工具\n" +
        "DVA313-02#&[juananinca]#&2015#&2016#&open source#&c##&Windows#&Desktop (GUI)#&OTAT#&1#&#&#&#&#&#&#&XML(还需研究)#&#&#&#&CSV#&#&随机测试#&19条commit记录#&https://github.com/juananinca/DVA313-02#&#&\n" +
        "covering_arrays_validator#&[Lappalainen]#&2015#&2015#&open source#&Python#&Cross#&Desktop (CLI)#&#&#&#&#&#&#&Y, 判断是否是覆盖表#&#&指定格式测试用例集#&#&#&#&#&#&#&17条commit记录#&https://github.com/jkklapp/covering_arrays_validator#&#&\n" +
        "OAs#&[Francetic]#&2015#&2015#&open source#&Python#&Cross#&Desktop (CLI)#&Mathematical (OA)#&2#&#&Y#&#&#&#&#&#&#&#&#&reduced form#&#&#&5条commit记录#&https://github.com/nevenaf/OAs#&#&\n" +
        "CoveringArray#&[ksarkar]#&2016#&2016#&open source#&Java#&Cross#&Library#&Multiple#&[1-n]#&#&#&#&#&#&#&#&#&#&#&#&#&#&11条commit记录#&https://github.com/ksarkar/CoveringArray#&#&\n" +
        "pairwise-testing#&[Rasmus]#&2016#&2017#&open source#&HTML#&Cross#&Web APP#&复用PICT#&2#&Y#&#&#&设置预期结果#&#&#&复用PICT#&Y#&Logical formula#&#&#&#&aliasing、负面测试、参数权重#&12条commit记录#&https://github.com/rasmusselsmark/pairwise-testing#&#&需要本地部署\n" +
        "greedy_covering#&[Mittal]#&2016#&2017#&open source#&matlab#&Cross#&Desktop (CLI)#&Greedy (OTAT)#&3#&#&#&#&#&#&#&#&#&#&#&#&#&#&10条commit记录#&https://github.com/smittal6/greedy-covering#&A density-based greedy algorithm for higher strength covering arrays#&\n" +
        "pairwise-testing#&[SelinGungor]#&2017#&2017#&open source#&Python#&Cross#&Desktop (CLI)#&Greedy (OTAT)#&2#&#&#&#&#&#&#&自定义#&#&#&#&#&#&#&21条commit记录#&https://github.com/SelinGungor/pairwise-testing#&#&\n" +
        "GenPairs#&[Young]#&2017#&2017#&open source#&Python#&Linux#&Desktop (CLI)#&Greedy (OTAT)#&2#&#&Y#&#&#&#&#&自定义#&Y#&boolean formula#&Y#&#&#&找出未覆盖组合#&12条commit记录#&https://github.com/TestCreator/GenPairs#&#&\n" +
        "Nenya#&[wu]#&2018#&2018#&open source#&Java#&Cross#&Library#&Multiple (AETG-like, GA, SCA)#&[1-n]#&#&Y#&Y#&#&#&Y#&CASA format#&Y#&boolean formula#&#&#&#&随机测试、自适应随机测试；基于组合覆盖的约减和排序；基于切换成本的排序；多目标 (覆盖率和切换成本)的排序#&2条commit记录#&https://github.com/waynedd/Nenya#&#&\n" +
        "beanfiller-tcases#&[Kruse]#&2018#&2018#&open source#&Java#&Cross#&Library#&复用tcases#&[1-n]#&#&#&#&#&#&#&源码#&#&#&#&#&#&#&3条commit记录#&https://github.com/beanfiller/beanfiller-tcases#&#&\n" +
        "pairwise_test_case_generator#&[ryiwamoto]#&2018#&2018#&open source#&TypeScript#&Cross#&Web APP#&Greedy (OTAT)#&2#&#&#&#&#&#&#&#&#&#&#&#&#&生成json格式测试用例#&2条commit记录#&https://github.com/ryiwamoto/pairwise_test_case_generator#&#&\n" +
        "jpwise#&[Davydov]#&2018#&2019#&open source#&Java#&Cross#&Library#&OTAT#&2, n#&#&#&#&#&#&#&源码#&Y#&boolean formula#&#&#&#&#&6条commit记录#&https://github.com/mike-d-davydov/jpwise#&#&\n" +
        "one-wise#&[Pinto]#&2018#&2018#&open source#&JavaScript#&Cross#&Library#&OTAT#&1#&#&#&#&#&#&#&源码#&#&#&#&#&#&#&19条commit记录#&https://github.com/thiagodp/one-wise#&#&";
    var tools = data.split("\n");
    alert(tools[1]);
}

