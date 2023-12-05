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
  external List<String> imageLinks;
  external DateTime timestamp;

  external Article(
    String title,
    String author,
    String body,
    List<Uint8List> images,
    List<String> imageLinks,
    DateTime timestamp,
  );
}
