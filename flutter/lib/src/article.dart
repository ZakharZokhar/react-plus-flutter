@JS()
library article;

import 'package:flutter/foundation.dart';
import 'package:js/js.dart';

@JS()
class Article {
  external String title;
  external String author;
  external String body;
  external List<Uint8List> images;
  external String timestampIsoString;

  external Article(
    String title,
    String author,
    String body,
    List<Uint8List> images,
    String timestampIsoString,
  );
}
