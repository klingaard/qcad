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
// File        : scripts/Modify/TrimBoth/Tests/TrimBothTest00.js
// Timestamp   : 2011-08-16 11:30:16
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function TrimBothTest00() {
    TdbTest.call(this, 'scripts/Modify/TrimBoth/Tests/TrimBothTest00.js');
}

TrimBothTest00.prototype = new TdbTest();

TrimBothTest00.prototype.test00 = function() {
    qDebug('running TrimBothTest00.test00()...');
    this.setUp();
    var w = objectFromPath('MainWindow::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonPress, new QPoint(34, 442), Qt.LeftButton, 1, 0);
    var w = objectFromPath('MainWindow::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonRelease, new QPoint(34, 442), Qt.LeftButton, 0, 0);
    this.importFile('scripts/Modify/TrimBoth/Tests/data/entities.dxf');
    this.triggerCommand('trim2');
    this.setZoom(8.828333608485094, new RVector(-2.20265, 9.38947, 0) );
    var p = new RVector(32.446182, 30.255606);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(8.828333608485094, new RVector(-2.20265, 9.38947, 0) );
    var p = new RVector(33.805442, 26.857456);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(8.828333608485094, new RVector(-2.20265, 9.38947, 0) );
    var p = new RVector(29.501119, 20.854058);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(8.828333608485094, new RVector(-2.20265, 9.38947, 0) );
    var p = new RVector(24.517166, 20.96733);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(8.828333608485094, new RVector(-2.20265, 9.38947, 0) );
    var p = new RVector(19.646485, 22.553133);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(8.828333608485094, new RVector(-2.20265, 9.38947, 0) );
    var p = new RVector(17.94741, 25.72474);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(8.828333608485094, new RVector(-2.20265, 9.38947, 0) );
    var p = new RVector(18.513768, 28.556531);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(8.828333608485094, new RVector(-2.20265, 9.38947, 0) );
    var p = new RVector(21.685375, 30.368878);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(8.828333608485094, new RVector(-2.20265, 9.38947, 0) );
    var p = new RVector(16.701422, 6.695101);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(8.828333608485094, new RVector(-2.20265, 9.38947, 0) );
    var p = new RVector(18.740312, 9.413621);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(8.828333608485094, new RVector(-2.20265, 9.38947, 0) );
    var p = new RVector(51.249278, 4.996026);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(8.828333608485094, new RVector(-2.20265, 9.38947, 0) );
    var p = new RVector(43.20699, 14.171031);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.verifyDrawing('TrimBothTest00_000.dxf');
    this.tearDown();
    qDebug('finished TrimBothTest00.test00()');
};

