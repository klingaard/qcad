function init(basePath) {
    var action = new RGuiAction(qsTranslate("TextAlignedLeader", "&Text Aligned Leader"), RMainWindowQt.getMainWindow());
    action.setRequiresDocument(true);
    action.setScriptFile(basePath + "/TextAlignedLeader.js");
    action.setIcon(basePath + "/TextAlignedLeader.svg");
    action.setStatusTip(qsTranslate("TextAlignedLeader", "&TextAlignedLeader"));
    action.setDefaultShortcut(new QKeySequence("2,T"));
    action.setDefaultCommands(["TextAlignedLeader", "tal"]);
    action.setGroupSortOrder(54100);
    action.setSortOrder(400);
    action.setWidgetNames(["MiscDrawMenu"]);
}
