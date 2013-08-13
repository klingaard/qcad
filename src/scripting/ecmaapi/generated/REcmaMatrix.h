// ***** AUTOGENERATED CODE, DO NOT EDIT *****
            // ***** This class is copyable.
        
        #ifndef RECMAMATRIX_H
        #define RECMAMATRIX_H

        #include "ecmaapi_global.h"

        #include <QScriptEngine>
        #include <QScriptValue>
        #include <QScriptContextInfo>
        #include <QDebug>

        
                #include "RMatrix.h"
            

        /**
         * \ingroup scripting_ecmaapi
         */
        class QCADECMAAPI_EXPORT REcmaMatrix {

        public:
      static  void init(QScriptEngine& engine, QScriptValue* proto 
    =NULL
    ) 
    ;static  QScriptValue create(QScriptContext* context, QScriptEngine* engine) 
    ;

    // conversion functions for base classes:
    

    // returns class name:
    static  QScriptValue getClassName(QScriptContext *context, QScriptEngine *engine) 
        ;

    // returns all base classes (in case of multiple inheritance):
    static  QScriptValue getBaseClasses(QScriptContext *context, QScriptEngine *engine) 
        ;

    // properties:
    

    // public methods:
    static  QScriptValue
        isValid
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        createIdentity2x2
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        createIdentity3x3
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        createIdentity
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        createRotation
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        create2x2
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        create3x3
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        create3x1
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        create2x3
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        multiplyWith
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        init
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        reset
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        clear
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        set3x3
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        set3x1
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        set2x3
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        set
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        get
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getRows
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getCols
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        rref
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getInverse
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getTransposed
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue
        getAppended
        (QScriptContext* context, QScriptEngine* engine) 
        ;static  QScriptValue toString
    (QScriptContext *context, QScriptEngine *engine)
    ;static  QScriptValue copy
    (QScriptContext *context, QScriptEngine *engine)
    ;static  QScriptValue destroy(QScriptContext *context, QScriptEngine *engine)
    ;static RMatrix* getSelf(const QString& fName, QScriptContext* context)
    ;static RMatrix* getSelfShell(const QString& fName, QScriptContext* context)
    ;};
    #endif
    