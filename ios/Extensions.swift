import Turbo

extension VisitProposal {
    func toDictionary() -> Dictionary<AnyHashable, Any> {
        return ["url": url.toDictionary(), "options": options.toDictionary(), "properties": properties]
    }
}

extension VisitOptions {
    func toDictionary() -> Dictionary<AnyHashable, Any> {
        return ["action": action.rawValue, "response": response?.toDictionary() as Any]
    }
}

extension VisitResponse {
    func toDictionary() -> Dictionary<AnyHashable, Any> {
        return ["isSuccessful": isSuccessful, "responseHTML": responseHTML as Any, "statusCode": statusCode]
    }
}

extension URL {
    func toDictionary() -> Dictionary<AnyHashable, Any> {
        return ["absoluteString": absoluteString, "path": path]
    }
}

extension TurboError {
    func toDictionary() -> Dictionary<AnyHashable, Any> {
        switch self {
        case .networkFailure:
            return ["type": "networkFailure", "localizedDescription": localizedDescription]
        case .timeoutFailure:
            return ["type": "timeoutFailure", "localizedDescription": localizedDescription]
        case .contentTypeMismatch:
            return ["type": "contentTypeMismatch", "localizedDescription": localizedDescription]
        case .pageLoadFailure:
            return ["type": "pageLoadFailure", "localizedDescription": localizedDescription]
        case .http(statusCode: let statusCode):
            return ["type": "httpFailure", "localizedDescription": localizedDescription, "statusCode": statusCode]
        }
    }
}

extension Error {
    func toDictionary() -> Dictionary<AnyHashable, Any> {
        return ["type": "unknownFailure", "localizedDescription": localizedDescription]
    }
}

