/**
 * Copyright (c) 2011-2018 by Andrew Mustun. All rights reserved.
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
#include "RSnapReference.h"
#include "RBlockReferenceEntity.h"

QList<RVector> RSnapReference::snapEntity(QSharedPointer<REntity> entity,
                                          const RVector& point,
                                          const RBox& queryBox,
                                          RGraphicsView& view,
                                          QList<REntity::Id>* subEntityIds) {
    Q_UNUSED(point)
    Q_UNUSED(queryBox)
    // MSVC:
    //Q_UNUSED(view)

    // 20210716: TODO: add subEntityIds:
    QList<RRefPoint> ret = entity->getInternalReferencePoints(RS::RenderTop, subEntityIds);
    QSharedPointer<RBlockReferenceEntity> blockRef = entity.dynamicCast<RBlockReferenceEntity>();
    if (!blockRef.isNull()) {
        // add reference point of block reference:
        ret.append(entity->getReferencePoints(RS::RenderTop));
        if (subEntityIds!=NULL) {
            subEntityIds->append(RObject::INVALID_ID);
        }
    }
    return RRefPoint::toVectorList(ret);
}
