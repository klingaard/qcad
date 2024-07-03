/**
 * Copyright (c) 2011-2013 by Andrew Mustun. All rights reserved.
 * 
 * This file is part of the QCAD project.
 *
 * QCAD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * QCAD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with QCAD.
 */
// Auto generated by Testing Dashboard
// File        : scripts/Modify/AutoTrim/Tests/AutoTrimTest00.js
// Timestamp   : 2011-07-27 16:38:11
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function AutoTrimTest00() {
    TdbTest.call(this, 'scripts/Modify/AutoTrim/Tests/AutoTrimTest00.js');
}

AutoTrimTest00.prototype = new TdbTest();

AutoTrimTest00.prototype.test00 = function() {
    qDebug('running AutoTrimTest00.test00()...');
    this.setUp();
    this.importFile('scripts/Modify/AutoTrim/Tests/data/line_arc_circle.dxf');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::ModifyToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::ModifyToolsPanel::AutoTrimButton');
    this.setToolOption('AutoTrim/RemoveSegment', 'true');
    this.updateToolOptions();
    this.setZoom(11.315068493150683, new RVector(-0.863801, 6.13378, 0) );
    var p = new RVector(22.781477, 26.300847);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.315068493150683, new RVector(-0.863801, 6.13378, 0) );
    var p = new RVector(23.04661, 22.677361);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.315068493150683, new RVector(-0.863801, 6.13378, 0) );
    var p = new RVector(21.013923, 10.834746);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.315068493150683, new RVector(-0.863801, 6.13378, 0) );
    var p = new RVector(10.143462, 11.099879);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('AutoTrimTest00_000.dxf');
    this.tearDown();
    qDebug('finished AutoTrimTest00.test00()');
};

