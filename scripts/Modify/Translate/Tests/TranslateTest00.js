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
// File        : scripts/Modify/Translate/Tests/TranslateTest00.js
// Timestamp   : 2011-08-16 10:02:22
// Description : moves entities, keeps original

include('scripts/Developer/TestingDashboard/TdbTest.js');

function TranslateTest00() {
    TdbTest.call(this, 'scripts/Modify/Translate/Tests/TranslateTest00.js');
}

TranslateTest00.prototype = new TdbTest();

TranslateTest00.prototype.test00 = function() {
    qDebug('running TranslateTest00.test00()...');
    this.setUp();
    this.importFile('scripts/Modify/Translate/Tests/data/entities.dxf');
    this.setZoom(2, new RVector(160.055, 63.2973, 0) );
    var p = new RVector(-140,-20);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(85,20);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.triggerCommand('move');
    var p = new RVector(-0.544239, 0.122428);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(-25.047325, 78.916667);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.dlgStart();
    this.dlgAppendCode('var map = new Map()');
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Mode', 'KeepOriginal')");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/NumberOfCopies',  [ 10, 0 ] )");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/UseCurrentAttributes', false)");
    this.dlgAppendCode("WidgetFactory.restoreState(dialog, 'DialogOpenedByTdb', undefined, false, undefined, map)");
    this.dlgEnd();
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.verifyDrawing('TranslateTest00_000.dxf');
    this.tearDown();
    qDebug('finished TranslateTest00.test00()');
};

