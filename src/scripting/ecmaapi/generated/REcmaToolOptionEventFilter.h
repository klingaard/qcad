// ***** AUTOGENERATED CODE, DO NOT EDIT *****
            // ***** This class is not copyable.
        
        #ifndef RECMATOOLOPTIONEVENTFILTER_H
        #define RECMATOOLOPTIONEVENTFILTER_H

        #include "ecmaapi_global.h"

        #include <QScriptEngine>
        #include <QScriptValue>
        #include <QScriptContextInfo>
        #include <QDebug>

        
                #include "RToolOptionEventFilter.h"
            

        /**
         * \ingroup scripting_ecmaapi
         */
        class
        
        QCADECMAAPI_EXPORT
        REcmaToolOptionEventFilter {

        public:
      static  void initEcma(QScriptEngine& engine, QScriptValue* proto 
    =NULL
    ) 
    ;static  QScriptValue createEcma(QScriptContext* context, QScriptEngine* engine) 
    ;

    // conversion functions for base classes:
    static  QScriptValue getQObject(QScriptContext *context,
            QScriptEngine *engine)
        ;

    // returns class name:
    static  QScriptValue getClassName(QScriptContext *context, QScriptEngine *engine) 
        ;

    // returns all base classes (in case of multiple inheritance):
    static  QScriptValue getBaseClasses(QScriptContext *context, QScriptEngine *engine) 
        ;

    // properties:
    

    // public methods:
    static  QScriptValue toString
    (QScriptContext *context, QScriptEngine *engine)
    ;static  QScriptValue destroy(QScriptContext *context, QScriptEngine *engine)
    ;static RToolOptionEventFilter* getSelf(const QString& fName, QScriptContext* context)
    ;static RToolOptionEventFilter* getSelfShell(const QString& fName, QScriptContext* context)
    ;static  void fromScriptValue(const QScriptValue& value,
        RToolOptionEventFilter*
        &out) {
            QObject* o = value.toQObject();
            out = qobject_cast<
            RToolOptionEventFilter*>(o);
        }
    static  QScriptValue toScriptValue(QScriptEngine *engine,
        RToolOptionEventFilter*
        const &in){
            QScriptValue s = engine->newQObject(in, QScriptEngine::QtOwnership,
            QScriptEngine::PreferExistingWrapperObject);
            /*
            if(s.isNull()){
               REcmaHelper::throwError("This object is null.", engine->currentContext());
            }
            */
            return s;
        }
    };
    #endif
    