/**
 * Logger Utility
 * Yapılandırılmış loglama için merkezi sistem
 * Production'da Sentry, LogRocket veya benzeri servislere gönderilebilir
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LogContext {
  [key: string]: unknown
}

interface LogEntry {
  level: LogLevel
  message: string
  timestamp: string
  context?: LogContext
  error?: Error
}

// Log seviyesi öncelikleri
const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
}

// Minimum log seviyesi (environment'a göre)
const MIN_LOG_LEVEL: LogLevel = process.env.NODE_ENV === 'production' ? 'info' : 'debug'

/**
 * Log entry'sini formatlayıp konsola yazdırır
 */
function writeLog(entry: LogEntry): void {
  // Seviye kontrolü
  if (LOG_LEVELS[entry.level] < LOG_LEVELS[MIN_LOG_LEVEL]) {
    return
  }

  const prefix = `[${entry.timestamp}] [${entry.level.toUpperCase()}]`
  const contextStr = entry.context ? ` ${JSON.stringify(entry.context)}` : ''

  switch (entry.level) {
    case 'debug':
      // eslint-disable-next-line no-console
      console.debug(`${prefix} ${entry.message}${contextStr}`)
      break
    case 'info':
      // eslint-disable-next-line no-console
      console.info(`${prefix} ${entry.message}${contextStr}`)
      break
    case 'warn':
      console.warn(`${prefix} ${entry.message}${contextStr}`)
      break
    case 'error':
      console.error(`${prefix} ${entry.message}${contextStr}`)
      if (entry.error) {
        console.error(entry.error.stack)
      }
      break
  }

  // Production'da external servise gönder
  if (process.env.NODE_ENV === 'production' && entry.level === 'error') {
    sendToErrorTracking(entry)
  }
}

/**
 * Error tracking servisine gönder (Sentry, LogRocket, vb.)
 */
function sendToErrorTracking(_entry: LogEntry): void {
  // Sentry entegrasyonu için:
  // if (typeof Sentry !== 'undefined' && _entry.error) {
  //   Sentry.captureException(_entry.error, {
  //     extra: _entry.context,
  //   })
  // }
  // Şimdilik sadece logluyoruz
  // TODO: Sentry veya benzeri servis entegrasyonu yapılacak
}

/**
 * Ana Logger class'ı
 */
class Logger {
  private namespace?: string

  constructor(namespace?: string) {
    this.namespace = namespace
  }

  private createEntry(
    level: LogLevel,
    message: string,
    context?: LogContext,
    error?: Error
  ): LogEntry {
    const fullMessage = this.namespace ? `[${this.namespace}] ${message}` : message
    return {
      level,
      message: fullMessage,
      timestamp: new Date().toISOString(),
      context,
      error,
    }
  }

  debug(message: string, context?: LogContext): void {
    writeLog(this.createEntry('debug', message, context))
  }

  info(message: string, context?: LogContext): void {
    writeLog(this.createEntry('info', message, context))
  }

  warn(message: string, context?: LogContext): void {
    writeLog(this.createEntry('warn', message, context))
  }

  error(message: string, error?: Error | unknown, context?: LogContext): void {
    const err = error instanceof Error ? error : undefined
    const ctx = error instanceof Error ? context : (error as LogContext)
    writeLog(this.createEntry('error', message, ctx, err))
  }

  /**
   * Child logger oluşturur (namespace ile)
   */
  child(namespace: string): Logger {
    const childNamespace = this.namespace ? `${this.namespace}:${namespace}` : namespace
    return new Logger(childNamespace)
  }
}

// Default logger instance
export const logger = new Logger()

// Namespace ile logger oluşturmak için factory
export function createLogger(namespace: string): Logger {
  return new Logger(namespace)
}

// API logger
export const apiLogger = createLogger('API')

// Component logger
export const componentLogger = createLogger('Component')

// Data logger
export const dataLogger = createLogger('Data')

export default logger
