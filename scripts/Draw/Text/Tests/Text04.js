// Auto generated by Testing Dashboard
// File        : scripts/Draw/Text/Tests/Text04.js
// Timestamp   : 2015-10-05 16:34:35
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function Text04() {
    TdbTest.call(this, 'scripts/Draw/Text/Tests/Text04.js');
}

Text04.prototype = new TdbTest();

Text04.prototype.test00 = function() {
    qDebug('running Text04.test00()...');
    this.setUp();
    this.importFile('scripts/Draw/Text/Tests/data/text04.dxf');
    this.selectAll();
    this.triggerCommand('explode');
    this.verifyDrawing('Text04_000.dxf');
    this.triggerCommand('explode');
    this.deselectAll();
    this.verifyDrawing('Text04_001.dxf');
    this.tearDown();
    qDebug('finished Text04.test00()');
};

