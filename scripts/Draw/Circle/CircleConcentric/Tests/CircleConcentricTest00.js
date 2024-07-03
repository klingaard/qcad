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
// File        : scripts/Draw/Circle/CircleConcentric/Tests/CircleConcentricTest00.js
// Timestamp   : 2011-02-28 14:07:43
// Description : 3 inside resp. 2 outside concentric circles to another circle

include('scripts/Developer/TestingDashboard/TdbTest.js');

function CircleConcentricTest00() {
    TdbTest.call(this, 'scripts/Draw/Circle/CircleConcentric/Tests/CircleConcentricTest00.js');
}

CircleConcentricTest00.prototype = new TdbTest();

CircleConcentricTest00.prototype.test00 = function() {
    qDebug('running CircleConcentricTest00.test00()...');
    this.setUp();
    this.clickOnWidget('MainWindow::MainToolsPanel::CircleToolsPanelButton');
    this.clickOnWidget('MainWindow::CircleToolsPanel::CircleCPButton');
    this.setZoom(10, new RVector(5, 5, 0) );
    var p = new RVector(18.1, 14.8);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(18.1, 14.8);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(10, new RVector(5, 5, 0) );
    var p = new RVector(24.1, 11.9);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(24.1, 11.9);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(8, 31.1);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    var p = new RVector(8, 31.1);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.clickOnWidget('MainWindow::MainToolsPanel::CircleToolsPanelButton');
    this.clickOnWidget('MainWindow::CircleToolsPanel::CircleConcentricButton');
    this.setToolOption('CircleConcentric/Distance',  [ 0.7, 0 ] );
    this.setToolOption('CircleConcentric/Number', '3');
    this.updateToolOptions();
    this.setZoom(10, new RVector(5, 5, 0) );
    var p = new RVector(23.8, 17);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(23.8, 17);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setToolOption('CircleConcentric/Distance',  [ 2.6, 0 ] );
    this.setToolOption('CircleConcentric/Number', '2');
    this.updateToolOptions();
    this.setZoom(10, new RVector(5, 5, 0) );
    var p = new RVector(24.1, 19.7);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(24.1, 19.7);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(36.2, 14.2);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    var p = new RVector(36.2, 14.2);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('CircleConcentricTest00_000.dxf');
    this.tearDown();
    qDebug('finished CircleConcentricTest00.test00()');
};

